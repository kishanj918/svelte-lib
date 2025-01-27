import { days } from '$components/forms/elements/Calendar/utils';
import { test, expect } from '@playwright/test';
import dayjs from 'dayjs';

test.describe('Form Detail View Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/detail/view');
  });
  /**
   * String View tests
   */
  test('Renders normal string', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-0 #string-view-0000')).toHaveText(
      'some ID'
    );
  });
  test('Converts a certain number into a string format.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-1 #string-view-0001')).toHaveText(
      '22334'
    );
  });
  /**
   * String View tests
   */

  /**
   *  Boolean View tests
   */
  test('Ensure a boolean field is correctly converted into a string format.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-3 #boolean-view-0000')).toHaveText('Yes');
  });
  test('Transforms a boolean field into a checkbox element', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-4 #checkbox-0000')).toBeVisible();
  });
  test('Transforms a boolean field into a switch element', async ({ page }) => {
    await expect(
      page.locator('#form-detail-view-0000-row-5 #display-only-switch-0000')
    ).toBeVisible();
  });
  /**
   *  Boolean View tests
   */

  /**
   * Currency View tests
   */
  test('Displays the currency accurately.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-6 #currency-view-0000')).toHaveText(
      '$223.34'
    );
  });
  test('Shows the unnormalized form of the currency.  ', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-7 #currency-view-0001')).toHaveText(
      '$22,334'
    );
  });
  test('Shows currency in terms of Quid.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-8 #currency-view-0002')).toHaveText(
      '£223.34'
    );
  });
  test('Transforms a string into a currency format.  ', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-9 #currency-view-0003')).toHaveText(
      '$483.94'
    );
  });
  /**
   * Currency View tests
   */

  /**
   * Date view tests
   */
  test('Displays the date in the default format.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-10 #date-view-0000')).toHaveText(
      'Nov 15, 23'
    );
  });
  test('Displays the date in the Long US Format', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-11 #date-view-0001')).toHaveText(
      'Nov 15, 23'
    );
  });
  test('Displays the date in the Short CA Format.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-12 #date-view-0002')).toHaveText(
      '15/11/2023'
    );
  });
  test('Displays the date in the Short US Format.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-13 #date-view-0003')).toHaveText(
      '11/15/2023'
    );
  });
  /**
   * Date view tests
   */

  /**
   * Date time view tests
   */
  test('Displays the date and time in the default format ( Long CA Format, no seconds).', async ({
    page
  }) => {
    const currentDate = dayjs();
    await expect(page.locator('#form-detail-view-0000-row-14 #date-time-view-0000')).toHaveText(
      currentDate.format('MMM DD, YY h:mm A')
    );
  });

  test('Displays the date and time in the Long CA Format, w/ seconds.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-15 #date-time-view-0001')).toHaveText(
      dayjs().format('MMM DD, YY h:mm:ss A')
    );
  });
  test('Displays the date and time in the default  Long US Format, 24h format, w/ seconds.', async ({
    page
  }) => {
    await expect(page.locator('#form-detail-view-0000-row-16 #date-time-view-0002')).toHaveText(
      dayjs().format('MMM DD, YY H:mm:ss')
    );
  });
  test('Transforms an iOS string into the standard date and time format.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-17 #date-time-view-0003')).toHaveText(
      'Oct 01, 23 8:57 PM'
    );
  });
  /**
   * Date time view tests
   */

  /**
   * Float tests
   */
  test('Accurately displays a floating-point number.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-18 #float-0000')).toHaveText('33.23');
  });
  test('Displays a floating-point number derived from a normalized integer with specified decimal places.  ', async ({
    page
  }) => {
    await expect(page.locator('#form-detail-view-0000-row-19 #float-0001')).toHaveText('329.5325');
  });

  test('Displays a floating-point number derived from a normalized integer string with specified decimal places.  ', async ({
    page
  }) => {
    await expect(page.locator('#form-detail-view-0000-row-20 #float-0002')).toHaveText('32.849');
  });
  /**
   * Float tests
   */

  /**
   * Integer tests
   */
  test('Accurately displays a integer number.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-21 #integer-view-0000')).toHaveText(
      '3,295,325'
    );
  });
  test('Shows an integer that has been converted from a string. ', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-22 #integer-view-0001')).toHaveText(
      '32,849'
    );
  });
  /**
   * Integer tests
   */

  /**
   * Percentage tests
   */
  test('Displays a percentage, with specified decimal places, derived from a normalized integer.  ', async ({
    page
  }) => {
    await expect(page.locator('#form-detail-view-0000-row-23 #percentage-view-0000')).toHaveText(
      '329.5325%'
    );
  });
  test('Shows a percentage, including defined decimal points, converted from a string of a normalized integer.', async ({
    page
  }) => {
    await expect(page.locator('#form-detail-view-0000-row-24 #percentage-view-0001')).toHaveText(
      '32.849%'
    );
  });
  /**
   * Percentage tests
   */

  /**
   * Time View tests
   */
  test('Accurately displays a deafault time.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-25 #time-view-0000')).toHaveText(
      dayjs().format('h:mm A')
    );
  });
  test('Displays time in 24 hours', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-26 #time-view-0001')).toHaveText(
      dayjs().format('H:mm:ss')
    );
  });
  test('Shows time in a 24-hour format extracted from a nested value.  ', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-27 #time-view-0002')).toHaveText(
      '20:52:22'
    );
  });
  /**
   * Time View tests
   */

  test('Displays Tag elements from an array of strings', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-29 #tag-0000')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-29 #tag-0001')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-29 #tag-0002')).toBeVisible();
  });

  test('Displays dates from an array of dates', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-30 #date-view-0004')).toHaveText(
      dayjs().format('MMM DD, YY')
    );
    await expect(page.locator('#form-detail-view-0000-row-30 #date-view-0005')).toHaveText(
      'Oct 19, 23'
    );
  });
  test('Shows  dates obtained by extracting a nested value from an array of objects.', async ({
    page
  }) => {
    await expect(page.locator('#form-detail-view-0000-row-31 #date-view-0006')).toHaveText(
      dayjs().format('MMM DD, YY')
    );
    await expect(page.locator('#form-detail-view-0000-row-31 #date-view-0007')).toHaveText(
      'Oct 19, 23'
    );
  });
});
