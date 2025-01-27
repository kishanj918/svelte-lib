import { test, expect } from '@playwright/test';

test.describe('TextField Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/text-field');
  });
  test('displays the correct placeholder', async ({ page }) => {
    const placeholder = await page.locator('#text-field-0000 input').getAttribute('placeholder');
    await expect(placeholder).toBe('Enter Email here');
  });
  test('is disabled when disabled prop is true', async ({ page }) => {
    await expect(page.locator('#text-field-0001 input')).toBeDisabled();
  });
  test('shows error when invalid prop is set', async ({ page }) => {
    await expect(page.locator('#text-field-0002 div')).toHaveClass(/border-field-error/);
    await expect(page.locator('#text-field-0002')).toHaveText('Invalid email');
  });
  test('is focused when focused prop is true', async ({ page }) => {
    await expect(page.locator('#text-field-0000 div')).toHaveClass(/border-field-focused/);
  });
  test('updates its value on user input', async ({ page }) => {
    const input = await page.locator('#text-field-0000 input');
    await input.fill('test@gmail.com');
    await expect(input).toHaveValue('test@gmail.com');
  });
  test('displays the textfield inline when the inline prop is activated', async ({ page }) => {
    await expect(page.locator('#text-field-0003')).not.toHaveClass(/w-full/);
  });
});
