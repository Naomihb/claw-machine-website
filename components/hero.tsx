import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { StarField } from '@/components/star-field'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <StarField />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Commercial claw machines · United States
            </span>
            <h1 className="mt-6 text-pretty font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Claw machines built to{' '}
              <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                keep your floor busy
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Commercial-grade cranes for arcades, malls, and family
              entertainment centers — reliable, eye-catching, and easy to run.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg"
                className="text-base"
              >
                Request Product Information
              </Button>
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="text-base"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div
            className="led-bloom relative rounded-2xl"
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
                src="/images/arcade-interior.jpg"
                alt="A row of premium commercial claw machines with LED lighting in a modern indoor fun park"
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
