import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { siteConfig } from '@/lib/site-config'

type ContactPayload = {
  name?: string
  company?: string
  phone?: string
  email?: string
  location?: string
  businessType?: string
  quantity?: string
  message?: string
  company_website?: string // honeypot
  recaptchaToken?: string
}

// Simple in-memory rate limiter (per warm instance) as a basic abuse guard.
const RATE_LIMIT = 5
const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const hits = new Map<string, { count: number; reset: number }>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT
}

async function verifyRecaptcha(token: string | undefined, ip: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  // If reCAPTCHA isn't configured, don't block submissions.
  if (!secret) return true
  if (!token) return false

  try {
    const params = new URLSearchParams({ secret, response: token, remoteip: ip })
    const res = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      },
    )
    const data = (await res.json()) as { success: boolean; score?: number }
    if (!data.success) return false
    // v3 returns a score; treat low scores as bots.
    if (typeof data.score === 'number' && data.score < 0.5) return false
    return true
  } catch {
    return false
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: silently accept but do nothing if filled.
  if (body.company_website && body.company_website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  if (!body.name?.trim() || !body.email?.trim()) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 },
    )
  }

  const validRecaptcha = await verifyRecaptcha(body.recaptchaToken, ip)
  if (!validRecaptcha) {
    return NextResponse.json(
      { error: 'Spam verification failed. Please try again.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL || siteConfig.email
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  // If email isn't configured yet, log the lead so nothing is lost.
  if (!apiKey || !toEmail) {
    console.log('[v0] Contact form submission (email not configured):', body)
    return NextResponse.json({ ok: true })
  }

  const fields: [string, string][] = [
    ['Name', body.name || ''],
    ['Company', body.company || ''],
    ['Phone', body.phone || ''],
    ['Email', body.email || ''],
    ['City / State', body.location || ''],
    ['Business Type', body.businessType || ''],
    ['Machines Interested In', body.quantity || ''],
    ['Message', body.message || ''],
  ]

  const html = `
    <h2>New Claw Machine Inquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${label}</td><td>${escapeHtml(
              value,
            ).replace(/\n/g, '<br/>') || '—'}</td></tr>`,
        )
        .join('')}
    </table>
  `

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: `Claw Machine Inquiries <${fromEmail}>`,
      to: [toEmail],
      replyTo: body.email,
      subject: `New claw machine inquiry from ${body.name}`,
      html,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return NextResponse.json(
        { error: 'Could not send your request. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.log('[v0] Contact route error:', err)
    return NextResponse.json(
      { error: 'Could not send your request. Please try again.' },
      { status: 502 },
    )
  }
}
