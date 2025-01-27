import dayjs from 'dayjs';
import { expect, type Page, type Locator } from '@playwright/test';
import { getDatesToShow } from '../../lib/forms/elements/Calendar/utils';

export const generateDateSelectors = async (
  page: Page,
  dates: Date[],
  calendarId: string
): Promise<Locator[]> => {
  return await Promise.all(
    dates.map(async (date) => {
      return await page.locator(`#day-view-${calendarId}-${dayjs(date).format('YYYYMMDD')}`);
    })
  );
};

class CalendarPage {
  page: Page;
  focusDate: Date;
  calendarId: string;
  constructor(page: Page, calendarId: string) {
    this.page = page;
    this.focusDate = new Date();
    this.calendarId = calendarId;
  }

  async navigateToCalendar() {
    await this.page.goto('/tests/calendar');
  }

  async ensureBasicCalendarVisible() {
    const monthSwitchButton = await this.page.locator('#month-switch-button-0000');
    const dayView = await this.page.locator('#day-view-0000');
    const previousMonthButton = await this.page.locator('#previous-month-button-0000');
    const todayButton = await this.page.locator('#today-button-0000');
    const nextMonthButton = await this.page.locator('#next-month-button-0000');
    await expect(monthSwitchButton).toBeVisible();
    await expect(dayView).toBeVisible();
    await expect(previousMonthButton).toBeVisible();
    await expect(todayButton).toBeVisible();
    await expect(nextMonthButton).toBeVisible();
  }
  async ensureDatesVisible() {
    const dateSelectors = await this.getDateSelectors();
    const result = await Promise.all(
      dateSelectors.map(async (selector) => {
        return selector.isVisible();
      })
    );
    await expect(result.every((t) => t)).toBeTruthy();
  }
  async getDateSelectors() {
    const dateRange = getDatesToShow(this.focusDate, 1);
    return await generateDateSelectors(this.page, dateRange, this.calendarId);
  }
  async ensureDatesHidden() {
    const dateSelectors = await this.getDateSelectors();
    const result = await Promise.all(
      dateSelectors.map(async (selector) => {
        return await selector.isVisible();
      })
    );
    expect(result.some((v) => !v)).toBeTruthy();
  }
  async ensureTodayIsHighlighted() {
    const currentDate = dayjs(this.focusDate).format('YYYYMMDD');
    const currentDateButton = await this.page.locator(`#day-view-0000-${currentDate}`);
    const classList = await currentDateButton.getAttribute('class');
    const isSelected = classList ? classList.split(' ').includes('text-main-blue') : false;
    await expect(isSelected).toBeTruthy();
  }

  async clickAndCheckDayIsHighlighted() {
    const nextDay = dayjs(this.focusDate).add(1, 'day').format('YYYYMMDD');
    const nextDayButton = await this.page.locator(`#day-view-0000-${nextDay}`);
    await nextDayButton.click();
    const classList = await nextDayButton.getAttribute('class');
    const isSelected = classList
      ? classList.split(' ').includes('surface-calendar-selected')
      : false;
    await expect(isSelected).toBeTruthy();
  }

  async clickFocusedDateCheckPrimaryColor() {
    const currentDate = dayjs(this.focusDate).format('YYYYMMDD');
    const currentDateButton = await this.page.locator(`#day-view-0000-${currentDate}`);
    await currentDateButton.click();
    const classList = await currentDateButton.getAttribute('class');
    const isSelected = classList
      ? classList.split(' ').includes('surface-button-primary-default')
      : false;
    await expect(isSelected).toBeTruthy();
  }
  async gotoNextMonthAndCheckDates() {
    const nextMonthButton = await this.page.locator('#next-month-button-0000');
    await nextMonthButton.click();
    this.focusDate = dayjs(this.focusDate).add(1, 'month').toDate();
    await this.ensureDatesVisible();
  }
  async gotoPrevMonthAndCheckDates() {
    const nextMonthButton = await this.page.locator('#previous-month-button-0000');
    await nextMonthButton.click();
    this.focusDate = dayjs(this.focusDate).subtract(1, 'month').toDate();
    await this.ensureDatesVisible();
  }
  async clickToday() {
    await this.ensureDatesHidden();
    const todayButton = await this.page.locator('#today-button-0001');
    await todayButton.click();
    await this.ensureDatesVisible();
  }

  async clickMonthSwitchButton() {
    const monthSwitchButton = await this.page.locator(`#month-switch-button-${this.calendarId}`);
    const monthList = await this.page.locator(`#calendar-${this.calendarId} #month-list-0000`);
    const yearList = await this.page.locator(`#calendar-${this.calendarId} #year-list-0000`);
    await expect(monthList).toBeHidden();
    await expect(yearList).toBeHidden();
    await monthSwitchButton.click();
    await expect(monthList).toBeVisible();
    await expect(yearList).toBeVisible();
  }

  async changeMonthAndYear() {
    const monthSwitchButton = await this.page.locator(`#month-switch-button-${this.calendarId}`);
    const monthList = await this.page.locator(`#calendar-${this.calendarId} #month-list-0000`);
    const yearList = await this.page.locator(`#calendar-${this.calendarId} #year-list-0000`);
    await monthSwitchButton.click();
    await expect(monthList).toBeVisible();
    await expect(yearList).toBeVisible();
    const monthButton = await this.page.locator(`#calendar-${this.calendarId} #month-list-0000-11`);
    const yearButton = await this.page.locator(`#calendar-${this.calendarId} #year-list-0000-2022`);
    const doneButton = await this.page.locator(`#month-view-done-button-${this.calendarId}`);
    await expect(monthButton).toBeVisible();
    await expect(yearButton).toBeVisible();
    await expect(doneButton).toBeVisible();
    await monthButton.click();
    await yearButton.click();
    await doneButton.click();
    this.calendarId = '0002';
    this.focusDate = dayjs().set('month', 11).set('year', 2022).toDate();

    await this.ensureDatesVisible();
  }
}

export default CalendarPage;
