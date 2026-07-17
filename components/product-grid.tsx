import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { products } from '@/lib/products'

export function ProductGrid() {
  return (
    <section id="machines" className="border-t border-border bg-muted/40">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.slug}
              className="flex flex-col overflow-hidden p-0"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={`${product.name} commercial claw machine`}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  Best for: {product.bestFor}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Button
                  render={<a href="#contact" />}
                  nativeButton={false}
                  variant="outline"
                  className="mt-5 w-full"
                >
                  Ask for Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
