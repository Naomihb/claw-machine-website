import { Building2, MapPin, LayoutGrid, Handshake } from 'lucide-react'
import { StarField } from '@/components/star-field'

const reasons = [
  {
    icon: Building2,
    title: 'Commercial Focus',
    body: 'We understand indoor entertainment, arcade operations, and guest experience.',
  },
  {
    icon: MapPin,
    title: 'U.S. Market Support',
    body: 'We help operators understand what types of claw machines may work for their business.',
  },
  {
    icon: LayoutGrid,
    title: 'Multiple Machine Options',
    body: 'Different sizes, styles, and layouts are available depending on the location.',
  },
  {
    icon: Handshake,
    title: 'Operator-Friendly Setup',
    body: 'Our goal is to make the buying process simple and clear for business owners.',
  },
]

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/40">
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
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
                <reason.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
