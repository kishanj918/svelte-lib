import { test, expect } from '@playwright/test';

test.describe('CheckChipField Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/check-chip-field');
  });

  test('should render CheckChipField with options', async ({ page }) => {
    const option1 = await page.locator('#check-chip-0000 #chip-0000');
    const option2 = await page.locator('#check-chip-0000 #chip-0001');
    const option3 = await page.locator('#check-chip-0000 #chip-0002');

    await expect(option1).toBeVisible();
    await expect(option2).toBeVisible();
    await expect(option3).toBeVisible();
  });

  test('should allow selecting a chip', async ({ page }) => {
    const chip = await page.locator('#check-chip-0000 #chip-0000');
    const checkbox = await chip.locator('#checkbox-0000');
    await expect(checkbox).not.toHaveClass(/bg-blue-10/);
    await chip.click();
    await expect(checkbox).toHaveClass(/bg-blue-10/);
  });

  test('should allow unselecting a selected chip', async ({ page }) => {
    const chip = await page.locator('#check-chip-0001 #chip-0003');
    const checkbox = await chip.locator('#checkbox-0003');
    expect(checkbox).toHaveClass(/bg-blue-10/);
    await chip.click();
    await expect(chip).not.toHaveClass(/bg-blue-10/);
  });

  test('should not allow interaction when disabled', async ({ page }) => {
    const chip = await page.locator('#check-chip-0002 #chip-0006');

    await expect(chip).toBeDisabled();
  });
});
