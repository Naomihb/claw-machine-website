'use client'

import { Check } from 'lucide-react'
import { StarField } from '@/components/star-field'
import { dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

export function AboutMachines() {
  const { language } = useLanguage()
  const t = dictionary[language].about

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-background"
    >
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {t.points.map((point) => (
            <li
              key={point}
              className="surface-hover group flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-base leading-relaxed text-card-foreground">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
