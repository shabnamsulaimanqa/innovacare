import { Page } from '@playwright/test';


export class Basepage {
    constructor(protected page : Page){}
    async goto(url: string) {
        await this.page.goto(url);
    }
}