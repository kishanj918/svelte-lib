import dayjs from 'dayjs';
import { test, expect } from '@playwright/test';

test.describe('DateField Component', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/date');
  });
  test('Initial Rendering of Date Field Component', async ({ page }) => {
    const dateField = await page.locator('#date-field-0000');
    const calendar = await page.locator('#date-field-0000-selector');
    const todayDate = dayjs();
    await expect(dateField).toBeEnabled();
    await expect(dateField.locator('#date-field-0000-selected')).toHaveText(
      todayDate.format('MMM DD, YYYY')
    );
    await expect(calendar).toBeHidden();
  });
  test('Clicking DateField Button Should Open the Calendar', async ({ page }) => {
    const dateField = await page.locator('#date-field-0000');
    await dateField.click();
    await expect(page.locator('#date-field-0000-selector')).toBeVisible();
  });
  test('Choosing a date from the calendar results in the date being updated.  ', async ({
    page
  }) => {
    const dateField = await page.locator('#date-field-0000');
    await dateField.click();
    const dateToSelect = dayjs().add(1, 'day');
    const dateSelector = await page.locator(`#day-view-0000-${dateToSelect.format('YYYYMMDD')}`);
    await dateSelector.click();
    await expect(dateField.locator('#date-field-0000-selected')).toHaveText(
      dateToSelect.format('MMM DD, YYYY')
    );
  });
  test('should remain in a disabled state when the "disable" prop is set to "true."  ', async ({
    page
  }) => {
    const dateField = await page.locator('#date-field-0001 button');
    await expect(dateField).toBeDisabled();
  });
});
