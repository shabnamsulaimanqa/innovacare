import { Page, Locator } from '@playwright/test';
import { Basepage } from './BasePage';

export class DateRangePickerPage extends Basepage {
    readonly dateRangeButton: Locator;
    readonly fromInput: Locator;
    readonly toInput: Locator;
    readonly customOption: Locator;
    readonly todayOption: Locator;
    readonly yesterdayOption: Locator;
    readonly tomorrowOption: Locator;
    readonly currentWeekOption: Locator;
    readonly nextWeekOption: Locator;
    readonly currentMonthOption: Locator;
    readonly nextMonthOption: Locator;

    constructor(page: Page) {
        super(page);
        this.dateRangeButton = page.getByRole('button', { name: /Sep \d+, \d{4}/ });
        this.fromInput = page.locator('input[type="date"]').first();
        this.toInput = page.locator('input[type="date"]').last();
        this.customOption = page.getByText('Custom', { exact: true });
        this.todayOption = page.getByText('Today', { exact: true });
        this.yesterdayOption = page.getByText('Yesterday', { exact: true });
        this.tomorrowOption = page.getByText('Tomorrow', { exact: true });
        this.currentWeekOption = page.getByText('Current Week', { exact: true });
        this.nextWeekOption = page.getByText('Next Week', { exact: true });
        this.currentMonthOption = page.getByText('Current Month', { exact: true });
        this.nextMonthOption = page.getByText('Next Month', { exact: true });
    }

    async open() {
        await this.dateRangeButton.click();
    }

    async getFromValue(): Promise<string> {
        return this.fromInput.inputValue(); // returns yyyy-mm-dd (native date input format)
    }

    async getToValue(): Promise<string> {
        return this.toInput.inputValue();
    }
}