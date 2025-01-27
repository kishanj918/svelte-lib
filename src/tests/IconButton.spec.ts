import { test, expect } from '@playwright/test';
test.describe('Icon Button', async () => {
  test('Renders Icon', async ({ page }) => {
    await page.goto('/tests/icon-button');
    await page.waitForLoadState('networkidle');

    const button = page.locator('#icon-button-0000');
    const icon = await button.locator('svg');
    await expect(icon).toBeVisible();
  });
  test('Button is clickable when not disabled', async ({ page }) => {
    await page.goto('/tests/icon-button');
    await page.waitForLoadState('networkidle');

    const button = page.locator('#icon-button-0000');

    await expect(button).toBeEnabled();
  });
  test('Button is not clickable when disabled', async ({ page }) => {
    await page.goto('/tests/icon-button');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#icon-button-0001');

    await expect(button).toBeDisabled();
  });
  test('While the button is in the loading state, it displays a loader and remains disabled.', async ({
    page
  }) => {
    await page.goto('/tests/icon-button');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#icon-button-0002');
    const loader = await button.locator('svg');
    await expect(loader).toBeVisible();
    await expect(button).toBeDisabled();
  });
});
