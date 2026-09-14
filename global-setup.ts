import { chromium } from '@playwright/test';
import { users } from './e2e/src/data/users';

export default async function globalSetup() {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://innovaweb.innovacare.net/login');
    await page.getByPlaceholder('enter your username').fill(users.standard.username);
    await page.getByPlaceholder('enter your password').fill(users.standard.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForFunction(() => {
        const raw = localStorage.getItem('innovacare-auth');
        if (!raw) return false;
        return JSON.parse(raw).state?.isAuthenticated === true;
    }, { timeout: 15000 });

    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
}