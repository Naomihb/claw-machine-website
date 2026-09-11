import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageToggle } from '@/components/language-toggle'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { SiteHeader } from '@/components/site-header'

describe('LanguageToggle', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('defaults to English selected', () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    )
    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: '中文' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('switches the header nav labels to Chinese when 中文 is clicked', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <SiteHeader />
      </LanguageProvider>,
    )

    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)

    await user.click(screen.getAllByRole('button', { name: '中文' })[0])

    expect(screen.getAllByText('首页').length).toBeGreaterThan(0)
    expect(screen.queryByText('Home')).not.toBeInTheDocument()
  })

  it('persists the chosen language to localStorage', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    )

    await user.click(screen.getByRole('button', { name: '中文' }))
    expect(window.localStorage.getItem('vega-language')).toBe('zh')
  })
})
