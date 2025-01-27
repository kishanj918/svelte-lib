import { test, expect } from '@playwright/test';

test.describe('Dropdown Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/dropdown');
  });
  test('should display with the placeholder', async ({ page }) => {
    const placeholderText = await page.locator('#dropdown-0000 #option-label-0000');
    await expect(placeholderText).toHaveText('Please select one');
  });
  test('should open dropdown and select an option', async ({ page }) => {
    const dropdownButton = await page.locator('#dropdown-button-0000');
    const dropdownTray = await page.locator('#dropdown-tray-0000');
    await dropdownButton.click();
    await expect(dropdownTray).toBeVisible();
    const optionButton = await page.locator('#dropdown-button-0003');
    await optionButton.click();
    const selectedOption = await page.locator('#option-label-0000');
    await expect(selectedOption).toHaveText('One');
  });
  test('should not open when disabled', async ({ page }) => {
    await expect(await page.locator('#dropdown-button-0001')).toBeDisabled();
  });
  test('should allow adding a new option', async ({ page }) => {
    const dropdownButton = await page.locator('#dropdown-button-0000');
    await dropdownButton.click();
    const input = await page.locator('#dropdown-input-0000');
    await input.fill('Four');
    await page.keyboard.press('Enter');
    await input.fill('');
    await expect(page.locator('#dropdown-button-0005')).toBeVisible();
  });

  test('should display an error message when invalid', async ({ page }) => {
    await expect(page.locator('#dropdown-0002-error')).toBeVisible();
  });
});
