import { Page, Locator } from '@playwright/test';
import { Basepage } from './BasePage';

export class DashboardPage extends Basepage {
    readonly pageTitle: Locator;
    readonly pageSubtitle: Locator;
    readonly dateRangePicker: Locator;
    readonly crmTab: Locator;
    readonly SchedulingTab: Locator;
    readonly dashboardTab: Locator;
    readonly monitoringTab: Locator;
    readonly consumableTab: Locator;
    readonly BillingTab: Locator;
    readonly tableHeaders: Locator;




    constructor(page: Page) {
        super(page);
        this.dashboardTab = page.getByRole('button', { name: 'Dashboard' });
        this.monitoringTab = page.getByRole('button', { name: 'Monitoring' });
        this.crmTab = page.getByRole('button', { name: 'CRM' });
        this.SchedulingTab = page.getByRole('button', { name: 'Scheduling' });
        this.consumableTab = page.getByRole('button', { name: 'Consumable' });

        ////
        this.pageTitle = page.getByText('Planboard', { exact: true });
        this.pageSubtitle = page.getByText('Schedule / Task Management');
        this.dateRangePicker = page.getByRole('button', { name: /Sep \d+, \d{4}/ });
      //  this.taskTable = page.getByRole('table');
      //  this.tableHeaders = page.getByRole('columnheader');
        this.dashboardTab = page.getByRole('link', { name: 'Dashboard' });
        this.monitoringTab = page.getByRole('button', { name: 'Monitoring' });
        this.consumableTab = page.getByRole('button', { name: 'Billing' });
        this.BillingTab = page.getByRole('button', { name: 'Billing' });
    }

    async getVisibleColumnHeaders(): Promise<string[]> {
        return this.tableHeaders.allTextContents();
    }
}