import { test, expect } from '@playwright/test';

test.describe('Switch component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/switch');
  });

  test('Switch toggles when clicked', async ({ page }) => {
    const switchButton = await page.locator('#switch-0000');
    await expect(switchButton).toHaveClass(/bg-grey-2/);
    await switchButton.click();
    await expect(switchButton).toHaveClass(/bg-blue-10/);
  });

  test('Switch does not toggle when disabled', async ({ page }) => {
    const switchButton = await page.locator('#switch-0001');
    await expect(switchButton).toBeDisabled();
  });

  test('Switch does not toggle in display-only mode', async ({ page }) => {
    await expect(page.locator('span#display-only-switch-0002')).toBeVisible();
  });

  test('Switch does not toggle when defaultBehaviour prop is false', async ({ page }) => {
    const switchButton = await page.locator('#switch-0003');
    await switchButton.click();
    await expect(switchButton).toHaveClass(/bg-grey-2/);
  });
});
