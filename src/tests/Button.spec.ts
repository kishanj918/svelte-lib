import { test, expect } from '@playwright/test';
test.describe('Button', async () => {
  test('Renders Button label', async ({ page }) => {
    await page.goto('/tests/button');
    await page.waitForLoadState('networkidle');

    const button = page.getByRole('button', { name: 'Button', exact: true });
    await expect(button).toHaveText('Button');
  });
  test('Button is clickable when not disabled', async ({ page }) => {
    await page.goto('/tests/button');
    await page.waitForLoadState('networkidle');

    const button = await page.getByRole('button', { name: 'Button', exact: true });

    await expect(button).toBeEnabled();
  });
  test('Button is not clickable when disabled', async ({ page }) => {
    await page.goto('/tests/button');
    await page.waitForLoadState('networkidle');
    const button = await page.getByRole('button', { name: 'Disabled Button', exact: true });
    await expect(button).toBeDisabled();
  });
  test('While the button is in the loading state, it displays a loader and remains disabled.', async ({
    page
  }) => {
    await page.goto('/tests/button');
    await page.waitForLoadState('networkidle');

    const button = await page.getByRole('button', { name: 'Loading', exact: true });
    const loader = button.locator('#button-loader-0002');
    await expect(button).toBeDisabled();
    expect(await loader.isVisible()).toBeTruthy();
  });
  test('When the right icon is provided, it is visible.', async ({ page }) => {
    await page.goto('/tests/button');
    await page.waitForLoadState('networkidle');

    const button = await page.getByRole('button', { name: 'Right Icon', exact: true });

    const rightIcon = button.locator('#button-right-icon-0003');
    expect(await rightIcon.isVisible()).toBeTruthy();
  });
  test('When the left icon is provided, it is visible.', async ({ page }) => {
    await page.goto('/tests/button');
    await page.waitForLoadState('networkidle');

    const button = await page.getByRole('button', { name: 'Left Icon', exact: true });

    const leftIcon = button.locator('#button-left-icon-0004');
    expect(await leftIcon.isVisible()).toBeTruthy();
  });
});
