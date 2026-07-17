import { Phone, Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site-config'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Request Claw Machine Information
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us about your location and what type of claw machine setup
              you are looking for. We will contact you with more information.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 text-base font-medium transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-base font-medium transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-base font-medium">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                Serving the {siteConfig.serviceArea}
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
