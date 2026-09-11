'use client'

import { ClawLogo } from '@/components/claw-logo'
import { siteConfig } from '@/lib/site-config'
import { NAV_ITEMS, dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const { language } = useLanguage()
  const t = dictionary[language]

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, var(--color-primary) 0%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          <div className="max-w-sm">
            <div className="relative flex items-center gap-2">
              <span
                aria-hidden
                className="twinkle absolute -left-1 -top-1 h-1 w-1 rounded-full bg-white"
                style={{
                  boxShadow: '0 0 6px #f8fafc',
                  ['--twinkle-min' as string]: 0.2,
                  ['--twinkle-max' as string]: 0.85,
                  animationDuration: '9s',
                }}
              />
              <ClawLogo className="logo-glow h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold tracking-tight">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.header[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.requestInformation}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                {siteConfig.address}
              </li>
              <li className="text-sm text-muted-foreground">
                {t.footer.serviceArea}: {siteConfig.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.businessName}. {t.footer.rightsReserved}
          </p>
          <a
            href="/#home"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.footer.backToTop} &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
