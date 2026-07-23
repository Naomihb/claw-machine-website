import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-sky-400/30 blur-[100px]" />
        <div className="absolute -bottom-24 left-[38%] h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute right-[8%] top-[8%] h-56 w-56 rounded-full bg-purple-500/10 blur-[90px]" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
            <path d="M92 42 l1 -3 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 Z" stroke="#5eead4" strokeWidth="1.4" opacity="0.55" vectorEffect="non-scaling-stroke" />
            <path d="M8 12 l0.7 -2.2 l0.7 2.2 l2.2 0.7 l-2.2 0.7 l-0.7 2.2 l-0.7 -2.2 l-2.2 -0.7 Z" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5" vectorEffect="non-scaling-stroke" />
            <path d="M78 68 l0.9 -2.8 l0.9 2.8 l2.8 0.9 l-2.8 0.9 l-0.9 2.8 l-0.9 -2.8 l-2.8 -0.9 Z" stroke="#34d399" strokeWidth="1.3" opacity="0.5" vectorEffect="non-scaling-stroke" />
            <path d="M4 62 l0.5 -1.6 l0.5 1.6 l1.6 0.5 l-1.6 0.5 l-0.5 1.6 l-0.5 -1.6 l-1.6 -0.5 Z" stroke="#fbbf24" strokeWidth="1" opacity="0.24" vectorEffect="non-scaling-stroke" />
            <path d="M64 8 l0.5 -1.6 l0.5 1.6 l1.6 0.5 l-1.6 0.5 l-0.5 1.6 l-0.5 -1.6 l-1.6 -0.5 Z" stroke="#f472b6" strokeWidth="1" opacity="0.28" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center clip-corner bg-accent/30 px-3 py-1 text-sm font-medium text-accent-foreground">
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
                className="text-base clip-corner"
              >
                Request Product Information
              </Button>
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="text-base clip-corner"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/50 to-emerald-400/40 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-teal-200/25"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-teal-200/40"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,white_0%,#d3fbf3_30%,#2dd4bf_65%,transparent_100%)]"
            />
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
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
