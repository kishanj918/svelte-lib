import { test } from '@playwright/test';
import RangeCalendarPage from './helpers/RangeCalendarHelpers';

test.describe('Range Calendar', async () => {
  test('Choosing a start date and an end date should result in the highlighting of all dates within the range, inclusive of the start and end dates themselves.  ', async ({
    page
  }) => {
    const calendar = new RangeCalendarPage(page, '0000');
    await calendar.navigateToCalendar();
    await calendar.pickStartAndEndDateRange();
  });
});
