'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { ClawLogo } from '@/components/claw-logo'
import { LanguageToggle } from '@/components/language-toggle'
import { NAV_ITEMS, dictionary } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/language-context'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = dictionary[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/#home" className="flex items-center gap-2">
          <ClawLogo className="logo-glow h-8 w-8 text-primary" />
          <span className="font-heading text-lg font-bold tracking-tight">
            {siteConfig.businessName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Button
            render={<a href="/#contact" />}
            nativeButton={false}
            className="hidden sm:inline-flex"
          >
            {t.header.requestInfo}
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {t.header[link.key]}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <LanguageToggle className="self-start" />
              <Button
                render={<a href="/#contact" />}
                nativeButton={false}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {t.header.requestInfo}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
