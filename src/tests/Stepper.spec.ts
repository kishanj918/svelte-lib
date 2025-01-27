import { test, expect } from '@playwright/test';

test.describe('Stepper component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/stepper');
  });

  test('Increment button increases value', async ({ page }) => {
    const increamentButton = await page.locator('#stepper-0000 #stepper-increment-button-0000');
    const stepperValue = await page.locator('#stepper-0000 #stepper-value-0000');
    await increamentButton.click();
    expect(stepperValue).toHaveText('1');
  });

  test('Decrement button decreases value', async ({ page }) => {
    const decrementButton = await page.locator('#stepper-0001 #stepper-decrement-button-0001');
    const stepperValue = await page.locator('#stepper-0001 #stepper-value-0001');
    await decrementButton.click();
    await expect(stepperValue).toHaveText('1');
  });

  test('Value is not displayed when showValue is false', async ({ page }) => {
    const value = await page.locator('#stepper-value-0002');
    await expect(value).toBeHidden();
  });

  test('Stepper is disabled when disabled is true', async ({ page }) => {
    const increamentButton = await page.locator('#stepper-0003 #stepper-increment-button-0003');
    const decrementButton = await page.locator('#stepper-0003 #stepper-decrement-button-0003');
    await expect(increamentButton).toBeDisabled();
    await expect(decrementButton).toBeDisabled();
  });
});
