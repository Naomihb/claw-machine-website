import { test, expect } from '@playwright/test'
import { products } from '../../lib/products'

test.describe('Product detail pages', () => {
  for (const product of products) {
    test(`/products/${product.slug} renders the product name and a "See More"-linked back path`, async ({
      page,
    }) => {
      const response = await page.goto(`/products/${product.slug}`)
      expect(response?.status(), `expected 200 for /products/${product.slug}`).toBe(200)

      await expect(page.getByRole('heading', { name: product.name, level: 1 })).toBeVisible()
      // Scoped to the "Best for: ..." line specifically — a bare getByText(product.bestFor)
      // can also match the sitewide footer tagline, which shares overlapping phrases
      // (e.g. "malls, family entertainment centers") with some products' bestFor values.
      await expect(page.getByText(`Best for: ${product.bestFor}`)).toBeVisible()

      // The main product image should actually load (not a broken image).
      const mainImage = page.locator('img').first()
      await expect(mainImage).toBeVisible()
    })
  }

  test('unknown product slug returns a 404', async ({ page }) => {
    const response = await page.goto('/products/does-not-exist')
    expect(response?.status()).toBe(404)
  })

  test('every product card on the homepage links to a working detail page', async ({
    page,
  }) => {
    await page.goto('/#machines')
    for (const product of products) {
      const link = page.locator(`a[href="/products/${product.slug}"]`)
      await expect(link).toHaveCount(1)
    }
  })
})
