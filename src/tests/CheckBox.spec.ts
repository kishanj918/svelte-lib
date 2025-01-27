import { test, expect } from '@playwright/test';

test.describe('CheckBox Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/checkbox');
  });

  test('should render the CheckBox component', async ({ page }) => {
    await expect(page.locator('#checkbox-0000')).toBeVisible();
  });

  test('should be selected when selected prop is true', async ({ page }) => {
    await expect(page.locator('#checkbox-0001')).toHaveClass(/bg-blue-10/);
    await expect(page.locator('#checkbox-0001 svg')).toBeVisible();
  });

  test('should be indeterminate when selected prop is "indeterminate"', async ({ page }) => {
    await expect(page.locator('#checkbox-0002')).toHaveClass(/bg-blue-10/);
    const className = await page.locator('#checkbox-0002 span').getAttribute('class');
    await expect(className).toBe('h-0.5 w-2 rounded-full bg-white');
  });

  test('should be disabled when disabled prop is true', async ({ page }) => {
    await expect(page.locator('#checkbox-0003')).not.toHaveClass(/bg-blue-10/);
  });
});
