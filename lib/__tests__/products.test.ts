import { describe, expect, it } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { products, getProduct } from '@/lib/products'

const PUBLIC_DIR = path.resolve(__dirname, '../../public')

function assertPublicFileExists(src: string) {
  // src values look like "/images/products/foo.jpg"
  const filePath = path.join(PUBLIC_DIR, src)
  expect(fs.existsSync(filePath), `Missing file for src "${src}" (expected at ${filePath})`).toBe(true)
}

describe('products data', () => {
  it('has at least one product', () => {
    expect(products.length).toBeGreaterThan(0)
  })

  it('has unique slugs', () => {
    const slugs = products.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it.each(products.map((p) => [p.slug, p] as const))(
    'product "%s" has required fields populated',
    (_slug, product) => {
      expect(product.name.trim().length).toBeGreaterThan(0)
      expect(product.bestFor.trim().length).toBeGreaterThan(0)
      expect(product.description.trim().length).toBeGreaterThan(0)
      expect(product.glow).toMatch(/^#[0-9a-fA-F]{6}$/)
    },
  )

  const CJK_RANGE = /[一-鿿]/

  it.each(products.map((p) => [p.slug, p] as const))(
    'product "%s" has Simplified Chinese translations populated',
    (_slug, product) => {
      expect(product.bestForZh.trim().length).toBeGreaterThan(0)
      expect(product.bestForZh).toMatch(CJK_RANGE)
      expect(product.descriptionZh.trim().length).toBeGreaterThan(0)
      expect(product.descriptionZh).toMatch(CJK_RANGE)

      for (const photo of product.gallery ?? []) {
        expect(photo.captionZh.trim().length).toBeGreaterThan(0)
        expect(photo.captionZh).toMatch(CJK_RANGE)
      }
    },
  )

  it.each(products.map((p) => [p.slug, p] as const))(
    'product "%s" image files referenced on disk actually exist',
    (_slug, product) => {
      assertPublicFileExists(product.image)

      for (const angle of product.angles ?? []) {
        assertPublicFileExists(angle.src)
      }

      for (const photo of product.gallery ?? []) {
        assertPublicFileExists(photo.src)
      }
    },
  )

  it.each(products.map((p) => [p.slug, p] as const))(
    'product "%s" gallery/angle images have non-empty alt text',
    (_slug, product) => {
      for (const angle of product.angles ?? []) {
        expect(angle.alt.trim().length).toBeGreaterThan(0)
      }
      for (const photo of product.gallery ?? []) {
        expect(photo.alt.trim().length).toBeGreaterThan(0)
        expect(photo.caption.trim().length).toBeGreaterThan(0)
      }
    },
  )

  it('getProduct returns the matching product for a known slug', () => {
    const first = products[0]
    expect(getProduct(first.slug)).toEqual(first)
  })

  it('getProduct returns undefined for an unknown slug', () => {
    expect(getProduct('does-not-exist')).toBeUndefined()
  })
})
