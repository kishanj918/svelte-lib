import { test, expect } from '@playwright/test';

test.describe('Form Full Detail View Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/detail/full');
  });
  test('Displays the view mode fields accurately.', async ({ page }) => {
    await expect(page.locator('#form-detail-view-0000-row-0 #string-view-0000')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-1 #currency-view-0000')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-2 #tag-0000')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-2 #tag-0001')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-3 #date-time-view-0000')).toBeVisible();
    await expect(page.locator('#form-detail-view-0000-row-4 #date-time-view-0001')).toBeVisible();
  });
  test('Should be able to toggle between edit and view mode', async ({ page }) => {
    const editButton = await page.locator('#detail-form-0000 #text-button-0000');
    await expect(editButton).toHaveText('Edit');
    await editButton.click();
    const cancelButton = await page.locator('#detail-form-0000 #text-button-0001');
    const saveButton = await page.locator('#detail-form-0000 #text-button-0002');
    await expect(cancelButton).toHaveText('Cancel');
    await expect(saveButton).toHaveText('Save');
    await saveButton.click();
    await expect(page.locator('#detail-form-0000 #text-button-0003')).toHaveText('Edit');
  });
  test('Successfully modifies data.', async ({ page }) => {
    /*
      Clicking on the edit button to switch to edit mode.
    */
    await page.locator('#detail-form-0000 #text-button-0000').click();

    const firstTextField = await page.locator('#detail-form-0000 #text-field-0000 input');
    const secondTextField = await page.locator('#detail-form-0000 #text-field-0001 input');
    const dropdownButton = await page.locator('#detail-form-0000 #multilist-0000 > button');
    await firstTextField.fill('Hamburger1');
    await secondTextField.fill('test@gmail.com');
    await dropdownButton.click();
    const optionButton = await page.locator('#multi-dropdown-0000 #dropdown-button-0000');
    await optionButton.click();

    /*
      Clicking on save button to save updated data.
    */
    await page.locator('#detail-form-0000 #text-button-0002').click();

    await expect(page.locator('#form-detail-view-0001-row-0 #string-view-0004')).toHaveText(
      'Hamburger1'
    );
    await expect(page.locator('#form-detail-view-0001-row-0 #string-view-0004')).toHaveText(
      'Hamburger1'
    );
    await expect(page.locator('#form-detail-view-0001-row-2 #tag-0007')).toHaveText('microwave');
    await expect(page.locator('#form-detail-view-0001-row-3 #string-view-0008')).toHaveText(
      'test@gmail.com'
    );
  });

  test('Detail fields validation', async ({ page }) => {
    /*
      Clicking on the edit button to switch to edit mode.
    */
    await page.locator('#detail-form-0000 #text-button-0000').click();
    const productNameElement = await page.locator('#form-detail-edit-0000-row-0 #text-field-0000');
    const saveButton = await page.locator('#text-button-0002');
    const externalNameElement = await page.locator('#form-detail-edit-0000-row-1 #text-field-0001');
    await productNameElement.locator('input').fill('');
    await externalNameElement.locator('input').fill('');
    await externalNameElement.locator('input').blur();
    await page.mouse.move(-1, -1);
    await expect(saveButton).toBeDisabled();
    /*
       Confirming the occurrences of errors.
    */
    await expect(page.locator('#form-detail-edit-0000-row-0 #tooltip-0000')).toBeVisible();
    await expect(page.locator('#form-detail-edit-0000-row-1 #tooltip-0001')).toBeVisible();
  });
  test('The details should be reset when the cancel button is clicked.', async ({ page }) => {
    /*
      Clicking on the edit button to switch to edit mode.
    */
    await page.locator('#detail-form-0000 #text-button-0000').click();

    const firstTextField = await page.locator('#detail-form-0000 #text-field-0000 input');
    const dropdownButton = await page.locator('#detail-form-0000 #multilist-0000 > button');
    await firstTextField.fill('Hamburger1');
    await dropdownButton.click();
    const optionButton = await page.locator('#multi-dropdown-0000 #dropdown-button-0000');
    await optionButton.click();

    /*
      Clicking on cancel button to reset data.
    */
    await page.locator('#detail-form-0000 #text-button-0001').click();

    await expect(page.locator('#form-detail-view-0001-row-0 #string-view-0004')).toHaveText(
      'Hamburger'
    );

    await expect(page.locator('#form-detail-view-0001-row-2 #tag-0007')).toBeHidden();
  });
});
