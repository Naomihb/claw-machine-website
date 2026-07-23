import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StarField } from '@/components/star-field'
import { AngleViewer } from '@/components/angle-viewer'
import { TiltViewer } from '@/components/tilt-viewer'
import { Button } from '@/components/ui/button'
import { getProduct, products } from '@/lib/products'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <StarField />
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <a
              href="/#machines"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; Back to all machines
            </a>

            <div className="mt-6 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div
                className="led-bloom rounded-2xl"
                style={{
                  ['--bloom-spread' as string]: '-44px',
                  ['--bloom-blur' as string]: '22px',
                  ['--bloom-opacity' as string]: 0.4,
                  ['--bloom-opacity-hover' as string]: 0.55,
                  ['--ring-inset' as string]: '-3px',
                  ['--ring-thickness' as string]: '3px',
                  ['--ring-opacity' as string]: 0.9,
                  ['--ring-opacity-hover' as string]: 1,
                }}
              >
                <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-secondary">
                  {product.angles ? (
                    <AngleViewer frames={product.angles} glow={product.glow} />
                  ) : (
                    <TiltViewer
                      src={product.image}
                      alt={`${product.name} commercial claw machine`}
                      glow={product.glow}
                    />
                  )}
                </div>
              </div>

              <div>
                <h1 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-3 text-base font-medium text-primary">
                  Best for: {product.bestFor}
                </p>
                {product.dimensions ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Dimensions: {product.dimensions}
                  </p>
                ) : null}
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <Button
                  render={<a href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="mt-8 text-base"
                >
                  Ask for Details
                </Button>
              </div>
            </div>
          </div>
        </section>

        {product.gallery && product.gallery.length > 0 ? (
          <section className="relative overflow-hidden border-b border-border bg-muted/40">
            <StarField />
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Photos &amp; Specs
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {product.gallery.map((photo) => (
                  <figure key={photo.src} className="flex flex-col">
                    <div
                      className="led-bloom rounded-2xl"
                      style={{
                        ['--bloom-spread' as string]: '-12px',
                        ['--bloom-blur' as string]: '10px',
                        ['--bloom-opacity' as string]: 0.35,
                        ['--bloom-opacity-hover' as string]: 0.5,
                        ['--ring-inset' as string]: '-2px',
                        ['--ring-thickness' as string]: '2px',
                        ['--ring-opacity' as string]: 0.85,
                        ['--ring-opacity-hover' as string]: 1,
                      }}
                    >
                      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="relative overflow-hidden">
          <StarField />
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Interested in the {product.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Tell us about your location and we will follow up with full
              specs, pricing, and lead times.
            </p>
            <Button
              render={<a href="/#contact" />}
              nativeButton={false}
              size="lg"
              className="mt-8 text-base"
            >
              Ask for Details
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
