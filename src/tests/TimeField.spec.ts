import { test, expect } from '@playwright/test';
import dayjs from 'dayjs';

test.describe('TimeField Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/time-field');
  });
  test('should display the current time in default state', async ({ page }) => {
    const timeField = await page.locator('#text-field-0000 input');
    const time = dayjs().format('HH:mm');

    await expect(timeField).toHaveValue(time);
  });
  test('should be disabled when the disabled prop is true', async ({ page }) => {
    const timeField = await page.locator('#text-field-0001 input');
    await expect(timeField).toBeDisabled();
  });
  test('should show an error message when invalid', async ({ page }) => {
    const timeField = await page.locator('#text-field-0002-error');
    await expect(timeField).toHaveText('Invalid time');
  });
});
