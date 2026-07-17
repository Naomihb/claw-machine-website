import { Phone, Mail } from 'lucide-react'
import { ClawLogo } from '@/components/claw-logo'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Machines', href: '#machines' },
  { label: 'Business Opportunity', href: '#business' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <ClawLogo className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold tracking-tight">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Service area: {siteConfig.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
