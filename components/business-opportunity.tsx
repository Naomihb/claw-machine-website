import Image from 'next/image'
import { Button } from '@/components/ui/button'

const audiences = [
  'Mall owners',
  'Arcade operators',
  'Family entertainment centers',
  'Trampoline parks',
  'Restaurant owners',
  'Bowling centers',
  'Retail space operators',
  'Investors interested in claw machine stores',
]

export function BusinessOpportunity() {
  return (
    <section id="business" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-sm lg:order-1">
            <Image
              src="/images/venue-players.jpg"
              alt="Guests playing at a wall of glowing claw machines inside a busy family entertainment center"
              width={1000}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Start or Expand Your Claw Machine Business
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Claw machines are a popular attraction for entertainment venues
              and retail spaces. They can help create repeat play, increase
              guest spending, and add visual energy to your location. We can
              support operators who want to open a claw machine store or add
              machines to an existing business.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {audience}
                </span>
              ))}
            </div>

            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              className="mt-8 text-base"
            >
              Talk to Us About Your Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
