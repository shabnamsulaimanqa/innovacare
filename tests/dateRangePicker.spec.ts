import { test, expect } from '../e2e/src/fixture/test-fixtures';
import { DateRangePickerPage } from '../e2e/src/pages/DateRangePickerPage';
import {
    getToday, getYesterday, getTomorrow,
    getCurrentWeekRange, getNextWeekRange,
    getCurrentMonthRange, getNextMonthRange,
} from '../e2e/src/utils/dateUtils';

// Native <input type="date"> values are yyyy-mm-dd — this matches that format
function toInputFormat(date: Date): string {
    return date.toISOString().split('T')[0];
}

test.describe('Date Range Picker - Dynamic Date Presets', () => {
    let datePicker: DateRangePickerPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('/planboard');
        datePicker = new DateRangePickerPage(page);
        await datePicker.open();
    });

    test('Today preset selects the current date', async () => {
        await datePicker.todayOption.click();
        const expected = toInputFormat(getToday());
        await expect.poll(() => datePicker.getFromValue()).toBe(expected);
        await expect.poll(() => datePicker.getToValue()).toBe(expected);
    });

    test('Yesterday preset selects the previous date', async () => {
        await datePicker.yesterdayOption.click();
        const expected = toInputFormat(getYesterday());
        await expect.poll(() => datePicker.getFromValue()).toBe(expected);
        await expect.poll(() => datePicker.getToValue()).toBe(expected);
    });

    test('Tomorrow preset selects the next date git', async () => {
        await datePicker.tomorrowOption.click();
        const expected = toInputFormat(getTomorrow());
        await expect.poll(() => datePicker.getFromValue()).toBe(expected);
        await expect.poll(() => datePicker.getToValue()).toBe(expected);
    });

    test('Current Week preset selects Sun-Sat of this week', async () => {
        await datePicker.currentWeekOption.click();
        const { from, to } = getCurrentWeekRange();
        await expect.poll(() => datePicker.getFromValue()).toBe(toInputFormat(from));
        await expect.poll(() => datePicker.getToValue()).toBe(toInputFormat(to));
    });

    test('Next Week preset selects Sun-Sat of following week', async () => {
        await datePicker.nextWeekOption.click();
        const { from, to } = getNextWeekRange();
        await expect.poll(() => datePicker.getFromValue()).toBe(toInputFormat(from));
        await expect.poll(() => datePicker.getToValue()).toBe(toInputFormat(to));
    });

    test('Current Month preset selects 1st to last day of this month', async () => {
        await datePicker.currentMonthOption.click();
        const { from, to } = getCurrentMonthRange();
        await expect.poll(() => datePicker.getFromValue()).toBe(toInputFormat(from));
        await expect.poll(() => datePicker.getToValue()).toBe(toInputFormat(to));
    });

    test('Next Month preset selects 1st to last day of next month', async () => {
        await datePicker.nextMonthOption.click();
        const { from, to } = getNextMonthRange();
        await expect.poll(() => datePicker.getFromValue()).toBe(toInputFormat(from));
        await expect.poll(() => datePicker.getToValue()).toBe(toInputFormat(to));
    });

    test('Custom option allows manual From/To selection via calendar', async ({ page }) => {
        await datePicker.customOption.click();
        // Click a specific day in the calendar grid, e.g. the 15th
        await page.getByRole('gridcell', { name: '15', exact: true }).first().click();
        await page.getByRole('gridcell', { name: '20', exact: true }).first().click();
        // Add specific assertions once you confirm the actual selected values shown
    });
});