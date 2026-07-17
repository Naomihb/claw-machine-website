import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-accent/30 px-3 py-1 text-sm font-medium text-accent-foreground">
              Commercial claw machines · United States
            </span>
            <h1 className="mt-6 text-pretty font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Premium Claw Machines for Your Arcade, Mall, or Family
              Entertainment Center
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We help businesses bring high-quality claw machines to the U.S.
              market. Whether you are opening a claw machine store, adding
              machines to your arcade, or creating a new revenue stream inside
              your entertainment venue, we can help you choose the right
              machines.
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
