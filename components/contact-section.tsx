'use client'

import { MapPin, Phone, Building2 } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { StarField } from '@/components/star-field'
import { siteConfig } from '@/lib/site-config'
import { dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

export function ContactSection() {
  const { language } = useLanguage()
  const t = dictionary[language].contact

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-muted/40"
    >
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-base font-medium">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                {t.servingPrefix} {siteConfig.serviceArea}
              </li>
              <li className="flex items-center gap-3 text-base font-medium">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-base font-medium">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </span>
                {siteConfig.address}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
