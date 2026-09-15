import { users } from '../e2e/src/data/users';
import { test, expect } from '../e2e/src/fixture/test-fixtures';

test.describe('Login Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });



test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page.locator('h1')).toHaveText(/Welcome to Innovacare Portal/);
});

test('standard user logs in successfully', async ({ loginPage, dashboardPage, page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(dashboardPage.pageTitle).toBeVisible();
});
});
