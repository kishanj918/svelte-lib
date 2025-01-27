import { test, expect } from '@playwright/test';

test.describe('Masked Feilds Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/masked');
  });

  test('accurately displays the postal code', async ({ page }) => {
    await page.locator('#text-field-0000 input').fill('A1A1A1');
    await expect(page.locator('#text-field-0000 input')).toHaveValue('A1A 1A1');
  });
  test('accurately displays the currency', async ({ page }) => {
    const currencyField = await page.locator('#text-field-0001 input');
    await currencyField.fill('');
    await currencyField.fill('10000');
    await currencyField.blur();
    await expect(page.locator('#text-field-0001 input')).toHaveValue('$10,000.00');
  });
  test('Float component should display numbers rounded to the number of decimal points specified by the provided property.', async ({
    page
  }) => {
    const value = await page.locator('#text-field-0002 input').inputValue();
    await expect(value.split('.')[1].length).toBe(3);
  });
  test('Float component should restrict the entry to numeric values only.', async ({ page }) => {
    const floatField = await page.locator('#text-field-0002 input');
    await floatField.clear();
    await floatField.fill('ABCDE#');
    await expect(await floatField.inputValue()).toBe('');
  });
  test('Integer component should restrict the entry to numeric values only.', async ({ page }) => {
    const floatField = await page.locator('#text-field-0003 input');
    await floatField.clear();
    await floatField.fill('ABCDE#');
    await expect(await floatField.inputValue()).toBe('');
  });
  test('The Integer component should permit the entry of numbers that fall within the specified minimum and maximum value range.', async ({
    page
  }) => {
    const integerField1 = await page.locator('#text-field-0003 input');
    await expect(integerField1).toHaveValue('2');

    const integerField2 = await page.locator('#text-field-0004 input');

    await expect(integerField2).toHaveValue('2');
  });
  test('accurately displays Mac Address', async ({ page }) => {
    const macAddressField = await page.locator('#text-field-0005 input');
    await macAddressField.fill('AAAAAAAAAAAA');
    expect(macAddressField).toHaveValue('AA:AA:AA:AA:AA:AA');
  });
  test('accurately displays percentage', async ({ page }) => {
    const percentageField = await page.locator('#text-field-0006 input');
    await percentageField.fill('12');
    expect(percentageField).toHaveValue('12%');
  });
  test('Percentage component should restrict the entry to numeric values only.', async ({
    page
  }) => {
    const percentageField = await page.locator('#text-field-0006 input');
    await percentageField.clear();
    await percentageField.fill('ab');
    await expect(await percentageField.inputValue()).toBe('%');
  });
  test('accurately displays phone number', async ({ page }) => {
    const phoneField = await page.locator('#text-field-0007 input');
    await phoneField.fill('5555555555');
    expect(phoneField).toHaveValue('(555) 555-5555');
  });
  test('PhoneField component should restrict the entry to numeric values only.', async ({
    page
  }) => {
    const phoneField = await page.locator('#text-field-0007 input');
    await phoneField.clear();
    await phoneField.fill('ab');
    await expect(await phoneField.inputValue()).toBe('(');
  });
  test('accurately displays pincode', async ({ page }) => {
    const picodeField = await page.locator('#text-field-0008 input');
    await picodeField.fill('123456');
    expect(picodeField).toHaveValue('123456');
  });
  test('PincodeField Component  must be restricted to accepting only six digits.', async ({
    page
  }) => {
    const picodeField = await page.locator('#text-field-0008 input');
    await picodeField.fill('1234567');
    expect(picodeField).toHaveValue('123456');
  });
  test('PincodeField component should restrict the entry to numeric values only.', async ({
    page
  }) => {
    const picodeField = await page.locator('#text-field-0008 input');
    await picodeField.clear();
    await picodeField.fill('ab');
    await expect(await picodeField.inputValue()).toBe('');
  });

  test('UsZipCodeField Component  must be restricted to accepting only five digits.', async ({
    page
  }) => {
    const uszipCodeField = await page.locator('#text-field-0009 input');
    await uszipCodeField.fill('12345');
    expect(uszipCodeField).toHaveValue('12345');
  });

  test('UsZipCodeField component should restrict the entry to numeric values only.', async ({
    page
  }) => {
    const uszipCodeField = await page.locator('#text-field-0009 input');
    await uszipCodeField.clear();
    await uszipCodeField.fill('ab');
    await expect(await uszipCodeField.inputValue()).toBe('');
  });
});
