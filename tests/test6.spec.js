const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const FavoritesPage = require('../pages/favoritesPage');

test.describe('Add to favourites feature', () => {

    let homePage;
    let loginPage;
    let productPage;
    let favoritesPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        favoritesPage = new FavoritesPage(page);
    });

    test('user adds Thor Hammer to favourites and verifies it', async ({ page }) => {

        await loginPage.open();
        await loginPage.login(
            'email2@email.com',
            '12345678Password@'
        );

        await expect(homePage.menuButton).toBeVisible();

        await page.goto('https://practicesoftwaretesting.com/');

        await homePage.searchForProduct('Thor Hammer');
        await homePage.openProductByName('Thor Hammer');

        await expect(productPage.productTitle).toHaveText('Thor Hammer');

        await productPage.addToFavourites();

        await expect(page.locator('.toast-container')).toBeVisible();

        await expect(homePage.menuButton).toBeVisible();

        await homePage.menuButton.click();
        await homePage.myFavoritesLink.click();

        await expect(favoritesPage.favoriteItems).toHaveText('Thor Hammer');

    });
});