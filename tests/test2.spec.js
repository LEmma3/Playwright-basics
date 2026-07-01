const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage.js');

test.describe('Invalid Login Feature', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('should display an error message for invalid login', async ({ page }) => {

        await loginPage.open();
        await loginPage.login('emaill@email.com', 'wrongpassword');

        await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');

        const errorText = await loginPage.errorMessage.textContent();
        console.log(errorText);

        await expect(loginPage.errorMessage)
            .toContainText('Invalid email or password');
    });

});