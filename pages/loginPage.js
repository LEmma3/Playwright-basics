class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('input[data-test="login-submit"]');
        this.errorMessage = page.locator('.help-block');
    }

    async open() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
