import { test, expect } from '@playwright/test';
test.describe('Text Button', async () => {
  test('Renders Button label', async ({ page }) => {
    await page.goto('/tests/text-button');
    await page.waitForLoadState('networkidle');

    const button = page.locator('#text-button-0000');
    await expect(button).toHaveText('Button');
  });
  test('Text Button is clickable when not disabled', async ({ page }) => {
    await page.goto('/tests/text-button');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#text-button-0000');

    await expect(button).toBeEnabled();
  });
  test('Text Button is not clickable when disabled', async ({ page }) => {
    await page.goto('/tests/text-button');
    await page.waitForLoadState('networkidle');
    const button = await page.locator('#text-button-0001');
    await expect(button).toBeDisabled();
  });
  test('While the button is in the loading state, it displays a loader and remains disabled.', async ({
    page
  }) => {
    await page.goto('/tests/text-button');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#text-button-0002');
    const loader = button.locator('#text-button-loader-0002');
    await expect(button).toBeDisabled();
    expect(await loader.isVisible()).toBeTruthy();
  });
  test('When the right icon is provided, it is visible.', async ({ page }) => {
    await page.goto('/tests/text-button');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#text-button-0003');

    const rightIcon = button.locator('#text-button-right-icon-0003');
    expect(await rightIcon.isVisible()).toBeTruthy();
  });
  test('When the left icon is provided, it is visible.', async ({ page }) => {
    await page.goto('/tests/text-button');
    await page.waitForLoadState('networkidle');

    const button = await page.locator('#text-button-0004');

    const leftIcon = button.locator('#text-button-left-icon-0004');
    expect(await leftIcon.isVisible()).toBeTruthy();
  });
});
