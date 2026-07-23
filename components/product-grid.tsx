import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { StarField } from '@/components/star-field'
import { TiltViewer } from '@/components/tilt-viewer'
import { AngleViewer } from '@/components/angle-viewer'
import { products } from '@/lib/products'

export function ProductGrid() {
  return (
    <section
      id="machines"
      className="relative overflow-hidden border-t border-border bg-muted/40"
    >
      <StarField />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Available Claw Machine Options
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            A selection of commercial machines for different locations and
            budgets. Reach out for full specs, photos, and pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="led-bloom rounded-xl"
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
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <div className="aspect-square overflow-hidden border-b border-border bg-secondary">
                  {product.angles ? (
                    <AngleViewer frames={product.angles} glow={product.glow} />
                  ) : (
                    <TiltViewer
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.name} commercial claw machine`}
                      glow={product.glow}
                    />
                  )}
                </div>
                <CardContent className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    Best for: {product.bestFor}
                  </p>
                  {product.dimensions ? (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Dimensions: {product.dimensions}
                    </p>
                  ) : null}
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <Button
                    render={<a href={`/products/${product.slug}`} />}
                    nativeButton={false}
                    variant="outline"
                    className="mt-5 w-full"
                  >
                    See More
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
