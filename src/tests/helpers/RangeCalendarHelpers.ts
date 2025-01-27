import dayjs, { Dayjs } from 'dayjs';
import { expect, type Page } from '@playwright/test';
import CalendarPage, { generateDateSelectors } from './Calendarhelpers';
function getDateRangeArray(startDate: Dayjs, endDate: Dayjs) {
  const dateArray = [];
  let currentDate = dayjs(startDate).startOf('day');

  while (currentDate.isBefore(dayjs(endDate).add(1, 'day'))) {
    dateArray.push(currentDate.toDate());
    currentDate = currentDate.add(1, 'day');
  }
  return dateArray;
}
class RangeCalendarPage extends CalendarPage {
  constructor(page: Page, calendarId: string) {
    super(page, calendarId);
  }

  async navigateToCalendar() {
    await this.page.goto('/tests/range-calendar');
  }

  async pickStartAndEndDateRange() {
    const dates = getDateRangeArray(dayjs('2023-11-06'), dayjs('2023-11-12'));
    const dateSelectors = await generateDateSelectors(this.page, dates, '0000');
    await dateSelectors[0].click();
    await dateSelectors[dateSelectors.length - 1].click();
    const result = await Promise.all(
      dateSelectors.map(async (selector) => {
        const classList = await selector.getAttribute('class');
        const isSelected = classList
          ? classList.split(' ').includes('surface-calendar-within-range')
          : false;
        return isSelected;
      })
    );
    expect(result.every((t) => t)).toBeTruthy();
  }
}

export default RangeCalendarPage;
