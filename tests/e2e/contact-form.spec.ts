import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('renders on the homepage with the expected fields', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.getByLabel('Name')).toBeVisible()
    await expect(page.getByLabel('Email Address')).toBeVisible()
    await expect(page.getByRole('button', { name: /submit request/i })).toBeVisible()
  })

  test('submitting valid details posts to /api/contact and shows a success message', async ({
    page,
  }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    })

    await page.goto('/#contact')
    await page.getByLabel('Name').fill('Test User')
    await page.getByLabel('Email Address').fill('test@example.com')
    await page.getByRole('button', { name: /submit request/i }).click()

    await expect(page.getByText(/thank you/i)).toBeVisible()
  })

  test('shows an error message if the API call fails', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Something went wrong.' }),
      })
    })

    await page.goto('/#contact')
    await page.getByLabel('Name').fill('Test User')
    await page.getByLabel('Email Address').fill('test@example.com')
    await page.getByRole('button', { name: /submit request/i }).click()

    await expect(page.getByText(/something went wrong/i)).toBeVisible()
  })
})
