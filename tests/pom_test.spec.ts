import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/pom.pages'; 
import { LoginPage } from '../pages/login.pages';  

test('POM Register and Login', async ({ page }) => {
    // Create instances of RegisterPage and LoginPage
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

// Navigate to the registration page and perform registration
    await registerPage.navigateToRegister();
    await page.screenshot({ path: 'ss/registerpage.png' }); 
    await registerPage.fillRegistrationForm("Mani", "Rasheed", "mani20220rash@mail.com", "03085369444", "1234mani");
    await registerPage.submitRegistration();

    const registerTitle = await registerPage.getPageTitle();
    console.log("Account Registered", registerTitle);


    await page.screenshot({ path: 'ss/after_registerpage.png' });
    expect(registerTitle).toEqual('Your Account Has Been Created!');

    
// Navigate to the login page and perform login
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');
    await loginPage.navigateToLogin();
    await page.screenshot({ path: 'ss/loginpage.png' }); 
    await loginPage.login("mani20220rash@mail.com", "1234mani");

    const loginTitle = await loginPage.getPageTitle();
    console.log("Home page title after login", loginTitle);

    await page.screenshot({ path: 'ss/after_login.png' });

    // Validate that the login was successful
    expect(loginTitle).toEqual('My Account');
});









