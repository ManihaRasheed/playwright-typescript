
import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get emailID() { return this.page.locator('#input-email'); }
    private get password() { return this.page.locator('#input-password'); }
    private get loginButton() { return this.page.locator("[value='Login']"); }

    // Actions

    async navigateToLogin() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');  
    }

    async login(email: string, password: string) {
        await this.emailID.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getPageTitle() {
        return await this.page.title();
    }
}
