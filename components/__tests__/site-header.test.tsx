import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SiteHeader } from '@/components/site-header'

describe('SiteHeader', () => {
  it('renders every primary nav link pointing at a homepage anchor (not a bare hash)', () => {
    const { container } = render(<SiteHeader />)

    // Regression test: nav links must be "/#section", not "#section".
    // A bare "#section" href only works while already on the homepage —
    // it silently does nothing on any other route (e.g. /products/[slug]).
    const nav = container.querySelector('nav[aria-label="Primary"]')
    expect(nav).not.toBeNull()

    const links = nav!.querySelectorAll('a[href]')
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^\/#[a-z-]+$/)
    })
  })

  it('logo links to the homepage anchor, not a bare hash', () => {
    const { container } = render(<SiteHeader />)
    const logoLink = container.querySelector('a[href="/#home"]')
    expect(logoLink).not.toBeNull()
  })

  it('every anchor rendered by the header uses a homepage-relative or absolute href, never a bare "#" hash', () => {
    const { container } = render(<SiteHeader />)
    const allAnchors = container.querySelectorAll('a[href]')
    expect(allAnchors.length).toBeGreaterThan(0)
    allAnchors.forEach((link) => {
      const href = link.getAttribute('href')!
      expect(href.startsWith('#')).toBe(false)
    })
  })
})
