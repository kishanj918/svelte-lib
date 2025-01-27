import { test, expect } from '@playwright/test';
test.describe('Big Chip component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/big-chip');
  });
  test('should render the component with radio type by default', async ({ page }) => {
    await expect(page.locator('#big-chip-0000 #radio-box-0000')).toBeVisible();
  });

  test('should toggle selected state on click if defaultBehaviour is true', async ({ page }) => {
    await page.click('#big-chip-0000');
    const classList = await page.locator('#big-chip-0000 #radio-box-0000').getAttribute('class');
    const isSelected = classList ? classList.split(' ').includes('bg-blue-10') : false;
    expect(isSelected).toBeTruthy();
  });

  test('should not toggle selected state if defaultBehaviour is false', async ({ page }) => {
    await page.click('#big-chip-0002');
    const classList = await page.locator('#big-chip-0002 #radio-box-0001').getAttribute('class');
    const isSelected = classList ? classList.split(' ').includes('bg-blue-10') : false;
    await expect(isSelected).toBeFalsy();
  });

  test('should be disabled if disabled property is set', async ({ page }) => {
    await expect(page.locator('#big-chip-0003')).toBeDisabled();
  });

  test('should display the check icon when type is set to check', async ({ page }) => {
    await expect(page.locator('#big-chip-0001 #checkbox-0000')).toBeVisible();
  });

  test('should handle the indeterminate state', async ({ page }) => {
    const className = await page
      .locator('#big-chip-0004 #radio-box-0003 span')
      .getAttribute('class');
    await expect(className).toBe('w-2 rounded-full bg-white h-0.5');
  });
});
