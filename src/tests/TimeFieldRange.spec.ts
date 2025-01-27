import { test, expect } from '@playwright/test';
import dayjs from 'dayjs';

test.describe('TimeFieldRange Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/time-field');
  });
  test('should display to and from time fields in default state', async ({ page }) => {
    const toTimeField = await page.locator('#text-field-0003  #time-range-to-field-0000');
    const fromTimeField = await page.locator('#text-field-0003  #time-range-from-field-0000');
    const toTime = dayjs().format('HH:mm');
    const fromTime = dayjs().add(1, 'hour').format('HH:mm');
    await expect(toTimeField).toHaveValue(toTime);
    await expect(fromTimeField).toHaveValue(fromTime);
  });
  test('should be disabled when the disabled prop is true', async ({ page }) => {
    const toField = await page.locator('#time-range-to-field-0001');
    const fromField = await page.locator('#time-range-from-field-0001');
    await expect(toField).toBeDisabled();
    await expect(fromField).toBeDisabled();
  });
  test('should show an error message when invalid', async ({ page }) => {
    const timeField = await page.locator('#text-field-0005-error');
    await expect(timeField).toHaveText('Invalid time');
  });
});
