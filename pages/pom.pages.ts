import { Page } from '@playwright/test';

export class RegisterPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get firstname() { return this.page.locator('#input-firstname'); }
    private get lastname() { return this.page.locator('#input-lastname'); }
    private get email() { return this.page.locator('#input-email'); }
    private get telephone() { return this.page.locator('#input-telephone'); }
    private get password() { return this.page.locator('#input-password'); }
    private get passwordconfirm() { return this.page.locator('#input-confirm'); }
    private get radiobutton() { return this.page.locator("input[name='newsletter'][value='0']"); }
    private get checkbox() { return this.page.locator("input[name='agree'][value='1']"); }
    private get continueButton() { return this.page.locator("[value='Continue']"); }

    // Actions

    async navigateToRegister() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');  
    }

    async fillRegistrationForm(firstName: string, lastName: string, email: string, telephone: string, password: string) {
        await this.firstname.fill(firstName);
        await this.lastname.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.passwordconfirm.fill(password);
        await this.radiobutton.check();
        await this.checkbox.check();
    }

    async submitRegistration() {
        await this.continueButton.click();
    }

    async getPageTitle() {
        return await this.page.title();
    }
}
