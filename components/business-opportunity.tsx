'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { StarField } from '@/components/star-field'
import { dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

export function BusinessOpportunity() {
  const { language } = useLanguage()
  const t = dictionary[language].business

  return (
    <section
      id="business"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-background"
    >
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="led-bloom order-2 rounded-2xl lg:order-1"
            style={{
              ['--bloom-spread' as string]: '-46px',
              ['--bloom-blur' as string]: '24px',
              ['--bloom-opacity' as string]: 0.4,
              ['--bloom-opacity-hover' as string]: 0.55,
              ['--ring-inset' as string]: '-3px',
              ['--ring-thickness' as string]: '3px',
              ['--ring-opacity' as string]: 0.9,
              ['--ring-opacity-hover' as string]: 1,
            }}
          >
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/venue-players.jpg"
                alt="Guests playing at a wall of glowing claw machines inside a busy family entertainment center"
                width={1000}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {audience}
                </span>
              ))}
            </div>

            <Button
              render={<a href="/#contact" />}
              nativeButton={false}
              size="lg"
              className="mt-8 text-base"
            >
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
