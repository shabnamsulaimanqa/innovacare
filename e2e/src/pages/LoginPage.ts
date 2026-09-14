import { Page, Locator } from '@playwright/test';
import { Basepage } from './BasePage';

export class LoginPage extends Basepage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByPlaceholder('enter your username');
        this.passwordInput = page.getByPlaceholder('enter your password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('.error-message');
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }



}