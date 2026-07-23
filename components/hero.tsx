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
          viewBox="0 0 1512 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="heroStarCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#d3fbf3" />
              <stop offset="65%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroStarHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
            </radialGradient>
            <filter id="heroSoften" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <circle cx="1290" cy="150" r="200" fill="url(#heroStarHalo)" filter="url(#heroSoften)" />
          <circle cx="1290" cy="150" r="78" fill="url(#heroStarCore)" />
          <g stroke="#99f6e4" strokeWidth="1" fill="none" opacity="0.35">
            <circle cx="1290" cy="150" r="128" />
            <circle cx="1290" cy="150" r="178" />
          </g>

          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1400 340 l5 -16 l5 16 l16 5 l-16 5 l-5 16 l-5 -16 l-16 -5 Z" stroke="#5eead4" strokeWidth="1.4" opacity="0.55" />
            <path d="M120 90 l3 -10 l3 10 l10 3 l-10 3 l-3 10 l-3 -10 l-10 -3 Z" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5" />
            <path d="M1180 500 l4 -13 l4 13 l13 4 l-13 4 l-4 13 l-4 -13 l-13 -4 Z" stroke="#34d399" strokeWidth="1.3" opacity="0.5" />
            <path d="M60 420 l2 -7 l2 7 l7 2 l-7 2 l-2 7 l-2 -7 l-7 -2 Z" stroke="#fbbf24" strokeWidth="1" opacity="0.24" />
            <path d="M980 60 l2 -7 l2 7 l7 2 l-7 2 l-2 7 l-2 -7 l-7 -2 Z" stroke="#f472b6" strokeWidth="1" opacity="0.28" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-accent/30 px-3 py-1 text-sm font-medium text-accent-foreground">
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

          <div className="relative">
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
