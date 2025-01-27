import { test, expect, type Locator } from '@playwright/test';

const checkElementIsActive = (element: Locator) => {
  return element.evaluate((el) => el.classList.contains('surface-element-primary'));
};
test.describe('Segmented Control', async () => {
  test('Renders Options', async ({ page }) => {
    await page.goto('/tests/segmented-control');
    const Option1 = await page.getByRole('button', { name: 'One', exact: true });
    const Option2 = await page.getByRole('button', { name: 'Two', exact: true });
    const Option3 = await page.getByRole('button', { name: 'Three', exact: true });

    await expect(Option1).toBeVisible();
    await expect(Option2).toBeVisible();
    await expect(Option3).toBeVisible();
    const isOption1Active = await checkElementIsActive(Option1);
    const isOption2Active = await checkElementIsActive(Option2);
    const isOption3Active = await checkElementIsActive(Option3);
    await expect(isOption1Active).toBeTruthy();
    await expect(isOption2Active).toBeFalsy();
    await expect(isOption3Active).toBeFalsy();
  });
  test('Clicking on a segment should select it', async ({ page }) => {
    await page.goto('/tests/segmented-control');
    const Option1 = await page.getByRole('button', { name: 'One', exact: true });
    const Option2 = await page.getByRole('button', { name: 'Two', exact: true });
    const Option3 = await page.getByRole('button', { name: 'Three', exact: true });

    const isOption1Active = await checkElementIsActive(Option1);
    const isOption2Active = await checkElementIsActive(Option2);
    const isOption3Active = await checkElementIsActive(Option3);
    await expect(isOption1Active).toBeTruthy();
    await expect(isOption2Active).toBeFalsy();
    await expect(isOption3Active).toBeFalsy();

    await Option2.click();
    await expect(await checkElementIsActive(Option1)).toBeFalsy();
    await expect(await checkElementIsActive(Option2)).toBeTruthy();
    await expect(await checkElementIsActive(Option3)).toBeFalsy();

    await Option3.click();
    await expect(await checkElementIsActive(Option1)).toBeFalsy();
    await expect(await checkElementIsActive(Option2)).toBeFalsy();
    await expect(await checkElementIsActive(Option3)).toBeTruthy();
  });
});
