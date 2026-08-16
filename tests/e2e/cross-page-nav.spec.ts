import { test, expect } from '@playwright/test'

// Regression coverage for the bug where header/footer nav links used a bare
// "#section" href. That works fine on the homepage but silently does nothing
// on any other route, because the browser looks for the anchor on the
// *current* page instead of navigating back to "/" first.

const SECTIONS = [
  { link: 'Home', id: 'home' },
  { link: 'Machines', id: 'machines' },
  { link: 'Business Opportunity', id: 'business' },
  { link: 'About', id: 'about' },
  { link: 'Contact', id: 'contact' },
]

test.describe('Nav links from a product detail page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products/roll2win')
    await expect(page).toHaveURL(/\/products\/roll2win/)
  })

  for (const { link, id } of SECTIONS) {
    test(`clicking "${link}" navigates back to the homepage and lands on "${id}"`, async ({
      page,
    }) => {
      await page
        .getByRole('navigation', { name: 'Primary' })
        .getByRole('link', { name: link, exact: true })
        .click()

      await expect(page).toHaveURL(new RegExp(`/#${id}$`))
      await expect(page.locator(`#${id}`)).toBeInViewport()
    })
  }

  test('footer "Request information" link also returns to the homepage contact section', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Request information' }).click()
    await expect(page).toHaveURL(/\/#contact$/)
    await expect(page.locator('#contact')).toBeInViewport()
  })
})
