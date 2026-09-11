'use client'

import { Building2, MapPin, LayoutGrid, Handshake } from 'lucide-react'
import { StarField } from '@/components/star-field'
import { dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

const icons = [Building2, MapPin, LayoutGrid, Handshake]

export function WhyUs() {
  const { language } = useLanguage()
  const t = dictionary[language].whyUs

  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/40">
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.reasons.map((reason, index) => {
            const Icon = icons[index]
            return (
              <div
                key={reason.title}
                className="led-bloom surface-hover group rounded-xl border border-border bg-card p-6"
                style={{
                  ['--bloom-spread' as string]: '-8px',
                  ['--bloom-blur' as string]: '8px',
                  ['--bloom-opacity' as string]: 0.28,
                  ['--bloom-opacity-hover' as string]: 0.45,
                  ['--ring-inset' as string]: '-1.5px',
                  ['--ring-thickness' as string]: '1.5px',
                  ['--ring-opacity' as string]: 0.6,
                  ['--ring-opacity-hover' as string]: 0.9,
                }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
