import { describe, expect, it } from 'vitest'
import { siteConfig } from '@/lib/site-config'

describe('siteConfig', () => {
  it('has a business name', () => {
    expect(siteConfig.businessName.trim().length).toBeGreaterThan(0)
  })

  it('phoneHref is a valid tel: value (E.164-ish: leading + and digits only)', () => {
    expect(siteConfig.phoneHref).toMatch(/^\+\d{7,15}$/)
  })

  it('phoneDisplay and phoneHref represent the same digits', () => {
    const displayDigits = siteConfig.phoneDisplay.replace(/\D/g, '')
    const hrefDigits = siteConfig.phoneHref.replace(/\D/g, '')
    // phoneHref includes the country code (e.g. leading "1"); phoneDisplay may not.
    expect(hrefDigits.endsWith(displayDigits)).toBe(true)
  })

  it('has a non-empty address', () => {
    expect(siteConfig.address.trim().length).toBeGreaterThan(0)
  })

  it('email looks like an email address', () => {
    expect(siteConfig.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })
})
