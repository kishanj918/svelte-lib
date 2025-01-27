import { test, expect } from '@playwright/test';

test.describe('Chip Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/chip');
  });

  test('should toggle selected state on click when defaultBehaviour is true', async ({ page }) => {
    const chip = await page.locator('#chip-0000');
    await chip.click();
    await expect(page.locator('#chip-0000 #radio-box-0000')).toHaveClass(/bg-blue-10/);

    await chip.click();
    await expect(page.locator('#chip-0000 #radio-box-0000')).not.toHaveClass(/bg-blue-10/);
  });

  test('should not toggle selected state when defaultBehaviour is false', async ({ page }) => {
    const chip = await page.locator('#chip-0001');
    await chip.click();
    await expect(page.locator('#chip-0001 #radio-box-0001')).not.toHaveClass(/bg-blue-10/);
  });

  test('should reflect radio or check type correctly', async ({ page }) => {
    // For type = radio
    await expect(page.locator('#chip-0002 #radio-box-0002')).toBeVisible();

    // For type = check
    await expect(page.locator('#chip-0003 #checkbox-0000')).toBeVisible();
  });

  test('should be disabled when disabled prop is true', async ({ page }) => {
    await expect(page.locator('#chip-0004')).toBeDisabled();
  });

  test('should be indeterminate when selected prop is "indeterminate"', async ({ page }) => {
    const className = await page.locator('#chip-0005 #radio-box-0004 span').getAttribute('class');
    await expect(className).toBe('w-2 rounded-full bg-white  h-0.5');
  });
});
