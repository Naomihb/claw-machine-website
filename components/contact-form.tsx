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
import { dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

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
  const { language } = useLanguage()
  const t = dictionary[language].contact

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
        throw new Error(data.error || t.genericErrorToast)
      }

      toast.success(t.successToast)
      form.reset()
      setBusinessType('')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t.genericErrorToast)
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
          <Label htmlFor="name">{t.formName}</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">{t.formCompany}</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">{t.formPhone}</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t.formEmail}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">{t.formLocation}</Label>
          <Input id="location" name="location" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="businessType">{t.formBusinessType}</Label>
          <Select
            value={businessType}
            onValueChange={(value) => setBusinessType(value ?? '')}
          >
            <SelectTrigger id="businessType" className="w-full">
              <SelectValue placeholder={t.formBusinessTypePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {t.businessTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="quantity">{t.formQuantity}</Label>
          <Input id="quantity" name="quantity" inputMode="numeric" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="message">{t.formMessage}</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t.formMessagePlaceholder}
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
            {submitting ? t.submitting : t.submit}
          </Button>
        </div>
      </form>
    </>
  )
}
