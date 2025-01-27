import { test, expect } from '@playwright/test';
test.describe('Icon Link', async () => {
  test('Renders Icon', async ({ page }) => {
    await page.goto('/tests/icon-link');
    await page.waitForLoadState('networkidle');

    const link = page.locator('#icon-link-0000');
    const icon = await link.locator('svg');
    await expect(icon).toBeVisible();
  });
  test('Clicking on a link leads to the page being redirected.  ', async ({ page }) => {
    await page.goto('/tests/icon-link');
    await page.waitForLoadState('networkidle');

    const link = page.locator('#icon-link-0000');
    await link.click();
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});
