import { test, expect } from '@playwright/test';

test.describe('Start Rating', async () => {
  test('Displays five empty stars  ', async ({ page }) => {
    await page.goto('/tests/star-rating');
    const stars = await page.locator('span').count();
    expect(stars).toBe(5);
  });
  test('It displays stars based on the given ratings.  ', async ({ page }) => {
    await page.goto('/tests/star-rating');
    const stars = await page.locator('span').evaluateAll((el) => {
      return el.map((e) => e.className as string);
    });
    const yellowStars = stars.filter((star) => {
      return star.includes('!text-rainbow-yellow-4');
    });
    await expect(yellowStars.length).toBe(3);
  });
});
