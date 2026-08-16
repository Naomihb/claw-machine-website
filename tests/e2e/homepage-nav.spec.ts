import { test, expect } from '@playwright/test'

const SECTIONS = [
  { link: 'Home', id: 'home' },
  { link: 'Machines', id: 'machines' },
  { link: 'Business Opportunity', id: 'business' },
  { link: 'About', id: 'about' },
  { link: 'Contact', id: 'contact' },
]

test.describe('Homepage navigation', () => {
  test('all five sections exist on the homepage', async ({ page }) => {
    await page.goto('/')
    for (const { id } of SECTIONS) {
      await expect(page.locator(`#${id}`)).toHaveCount(1)
    }
  })

  for (const { link, id } of SECTIONS) {
    test(`clicking "${link}" in the nav scrolls the "${id}" section into view`, async ({
      page,
    }) => {
      await page.goto('/')
      await page
        .getByRole('navigation', { name: 'Primary' })
        .getByRole('link', { name: link, exact: true })
        .click()

      const section = page.locator(`#${id}`)
      await expect(section).toBeInViewport()
    })
  }
})
