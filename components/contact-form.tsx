'use client'

import { useState } from 'react'
import Script from 'next/script'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { siteConfig } from '@/lib/site-config'

const businessTypes = [
  'Arcade',
  'Mall / Shopping Center',
  'Family Entertainment Center',
  'Trampoline Park',
  'Restaurant',
  'Bowling Center',
  'Investor / New Business',
  'Other',
]

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

async function getRecaptchaToken(): Promise<string | undefined> {
  if (!recaptchaSiteKey || !window.grecaptcha) return undefined
  return new Promise((resolve) => {
    window.grecaptcha!.ready(() => {
      window
        .grecaptcha!.execute(recaptchaSiteKey!, { action: 'contact' })
        .then(resolve)
        .catch(() => resolve(undefined))
    })
  })
}

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [businessType, setBusinessType] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitting(true)

    try {
      const formData = new FormData(form)
      const token = await getRecaptchaToken()

      const payload = {
        name: String(formData.get('name') || ''),
        company: String(formData.get('company') || ''),
        phone: String(formData.get('phone') || ''),
        email: String(formData.get('email') || ''),
        location: String(formData.get('location') || ''),
        businessType,
        quantity: String(formData.get('quantity') || ''),
        message: String(formData.get('message') || ''),
        // Honeypot — should stay empty for real users.
        company_website: String(formData.get('company_website') || ''),
        recaptchaToken: token,
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong.')
      }

      toast.success(
        'Thank you. We received your request and will contact you soon.',
      )
      form.reset()
      setBusinessType('')
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      ) : null}

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">City / State</Label>
          <Input id="location" name="location" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="businessType">Business Type</Label>
          <Select value={businessType} onValueChange={setBusinessType}>
            <SelectTrigger id="businessType" className="w-full">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="quantity">
            How many machines are you interested in?
          </Label>
          <Input id="quantity" name="quantity" inputMode="numeric" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your location and the type of setup you're looking for."
          />
        </div>

        {/* Honeypot field, hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_website">Company Website</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2">
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="text-base"
          >
            {submitting ? 'Submitting…' : 'Submit Request'}
          </Button>
          <p className="text-sm text-muted-foreground">
            Prefer to talk now? Call{' '}
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>{' '}
            or email{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </form>
    </>
  )
}
