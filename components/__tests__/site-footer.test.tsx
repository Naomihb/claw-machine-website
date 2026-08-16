import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/lib/site-config'

describe('SiteFooter', () => {
  it('every anchor rendered by the footer uses a homepage-relative href, never a bare "#" hash', () => {
    const { container } = render(<SiteFooter />)
    const allAnchors = container.querySelectorAll('a[href]')
    expect(allAnchors.length).toBeGreaterThan(0)
    allAnchors.forEach((link) => {
      const href = link.getAttribute('href')!
      expect(href.startsWith('#')).toBe(false)
    })
  })

  it('displays the configured phone number as a tel: link', () => {
    const { container } = render(<SiteFooter />)
    const telLink = container.querySelector(`a[href="tel:${siteConfig.phoneHref}"]`)
    expect(telLink).not.toBeNull()
    expect(telLink!.textContent).toContain(siteConfig.phoneDisplay)
  })

  it('displays the configured business address', () => {
    const { getByText } = render(<SiteFooter />)
    expect(getByText(siteConfig.address)).toBeInTheDocument()
  })
})
