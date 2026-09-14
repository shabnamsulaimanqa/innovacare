
import { users } from '../e2e/src/data/users';
import { test, expect } from '../e2e/src/fixture/test-fixtures';

test.describe('Dashboard Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/planboard');
    });

///// To Do: Add a test to verify that the dashboard page is displayed after successful login




test('Monitoring dropdown opens and shows options', async ({ page, dashboardPage }) => {
    await dashboardPage.monitoringTab.click();

    // Ant Design dropdown menus render as role="menu" with role="menuitem" children
    await expect(page.getByRole('menu')).toBeVisible();
});

test("Dashboard tab is present", async ({ page, dashboardPage }) => {
    await expect(dashboardPage.dashboardTab).toBeVisible();
});
test("Monitoring tab is present", async ({ page, dashboardPage }) => {
    await expect(dashboardPage.monitoringTab).toBeVisible();
});

});