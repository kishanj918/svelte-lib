import { test } from '@playwright/test';
import CalendarPage from './helpers/Calendarhelpers';

test.describe('Calendar', async () => {
  test('Displays calendar', async ({ page }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.ensureBasicCalendarVisible();
  });
  test('Shows every date of the current month.  ', async ({ page }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.ensureDatesVisible();
  });
  test('Today date should be highlighted.', async ({ page }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.ensureTodayIsHighlighted();
  });
  test('The day should become highlighted upon clicking on it.', async ({ page }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.clickAndCheckDayIsHighlighted();
  });
  test('Clicking on focused date should apply the primary color to it.  ', async ({ page }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.clickFocusedDateCheckPrimaryColor();
  });
  test('Clicking on next month button should display dates from next month.  ', async ({
    page
  }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.gotoNextMonthAndCheckDates();
  });
  test('Clicking on previous month button should display dates from prevous month.  ', async ({
    page
  }) => {
    const calendar = new CalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.gotoPrevMonthAndCheckDates();
  });

  test('Clicking on today button should display dates from current month.  ', async ({ page }) => {
    const calendar = new CalendarPage(page, '0001');
    await calendar.navigateToCalendar();
    await calendar.clickToday();
  });
  test('Pressing the month switch button should display the month view.', async ({ page }) => {
    const calendar = new CalendarPage(page, '0001');
    await calendar.navigateToCalendar();
    await calendar.clickMonthSwitchButton();
  });
  test('When you select a different month and year, the dates corresponding to that month and year should appear.', async ({
    page
  }) => {
    const calendar = new CalendarPage(page, '0001');
    await calendar.navigateToCalendar();
    await calendar.changeMonthAndYear();
  });
});
