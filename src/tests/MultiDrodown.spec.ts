import { test, expect } from '@playwright/test';

test.describe('Multi Dropdown Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/multi-dropdown');
  });
  test('should display with the placeholder', async ({ page }) => {
    const placeholderText = await page.locator('#multilist-0000');
    await expect(placeholderText).toHaveText('Please select one');
  });
  test('should allow selecting multiple options', async ({ page }) => {
    const dropdownButton = await page.locator('#multilist-0000 > button');
    const dropdownTray = await page.locator('#dropdown-tray-0000');
    await dropdownButton.click();
    await expect(dropdownTray).toBeVisible();
    const option1Button = await page.locator('#multi-dropdown-0000 #dropdown-button-0000');
    const option2Button = await page.locator('#multi-dropdown-0000 #dropdown-button-0000');
    const tag1 = await page.locator('#multi-dropdown-0000 #tag-0000');
    const tag2 = await page.locator('#multi-dropdown-0000 #tag-0001');
    await expect(tag1).toBeHidden();
    await expect(tag2).toBeHidden();
    await option1Button.click();
    await expect(tag1).toBeVisible();

    await option2Button.click();
    await expect(tag2).toBeVisible();
  });
  test('should not open when disabled', async ({ page }) => {
    await expect(await page.locator('#multilist-0001 button')).toBeDisabled();
  });
  test('should allow adding a new option', async ({ page }) => {
    const dropdownButton = await page.locator('#multilist-0000 > button');
    await dropdownButton.click();
    const input = await page.locator('#dropdown-input-0000');
    await input.fill('Four');
    await page.keyboard.press('Enter');
    await input.fill('');
    await expect(page.locator('#dropdown-button-0002')).toBeVisible();
  });
  test('should allow removing selected options', async ({ page }) => {
    const tag1 = await page.locator('#multi-dropdown-0002 #tag-0000');
    const tag2 = await page.locator('#multi-dropdown-0002 #tag-0001');
    await expect(tag1).toBeVisible();
    await expect(tag2).toBeVisible();
    const removeOption1 = await page.locator('#multi-dropdown-0002 #tag-remove-button-0000');
    const removeOption2 = await page.locator('#multi-dropdown-0002 #tag-remove-button-0000');
    await removeOption1.click();
    await removeOption2.click();
    await expect(tag1).toBeHidden();
    await expect(tag2).toBeHidden();
  });
});
