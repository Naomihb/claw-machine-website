import { Check } from 'lucide-react'
import { StarField } from '@/components/star-field'

const points = [
  'Commercial-grade machines',
  'Attractive LED design',
  'Multiple machine styles available',
  'Suitable for arcades, malls, and indoor entertainment centers',
  'Great for increasing guest engagement and extra revenue',
  'Product photos and renderings available upon request',
]

export function AboutMachines() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Claw Machines Built for Commercial Use
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our claw machines are designed for high-traffic commercial
            locations, including arcades, malls, family entertainment centers,
            trampoline parks, bowling centers, restaurants, and entertainment
            venues. We focus on machines that are attractive, reliable, and easy
            for operators to manage.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {points.map((point) => (
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
