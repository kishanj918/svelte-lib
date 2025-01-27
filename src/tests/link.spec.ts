import { test, expect } from '@playwright/test';
test.describe('Link', async () => {
  test('Clicking on a link leads to the page being redirected.  ', async ({ page }) => {
    await page.goto('/tests/link');
    await page.waitForLoadState('networkidle');

    const link = page.locator('#link-0000');
    await link.click();
    await expect(page).toHaveURL('https://playwright.dev/');
  });
  test('When the right icon is provided, it is visible.', async ({ page }) => {
    await page.goto('/tests/link');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#link-0001');

    const rightIcon = button.locator('#link-right-icon-0001');
    expect(await rightIcon.isVisible()).toBeTruthy();
  });
  test('When the left icon is provided, it is visible.', async ({ page }) => {
    await page.goto('/tests/link');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#link-0002');
    const leftIcon = button.locator('#link-left-icon-0002');
    expect(await leftIcon.isVisible()).toBeTruthy();
  });
});
