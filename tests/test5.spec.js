const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const HammerPage = require('../pages/hammerPage');
const CheckoutPage = require('../pages/checkoutPage');

test.describe('Add to basket feature', () => {

    let productName;
    let unitPrice;

    test.beforeEach(async ({ page }) => {

        const homePage = new HomePage(page);
        const hammerPage = new HammerPage(page);

        await homePage.open();

        await homePage.searchForProduct('Hammer');

        await hammerPage.openProductByName('Hammer');

        productName = await hammerPage.productName.textContent();

        const price = await hammerPage.productPrice.textContent();

        unitPrice = parseFloat(price.replace('$', ''));

        await hammerPage.increaseQuantity.click();

        await hammerPage.addToCartButton.click();

        await hammerPage.cartButton.click();
    });

    test('should contain Hammer in the basket', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await expect(checkoutPage.productName).toContainText(productName);
    });

    test('should show quantity 2 for Hammer', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await expect(checkoutPage.productQuantity).toHaveValue('2');
    });

    test('should display the correct total price', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        const totalText = await checkoutPage.totalPrice.textContent();

        const total = parseFloat(totalText.replace('$', ''));

        expect(total).toBe(unitPrice * 2);
    });

    test('should show 2 items on the cart indicator', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await expect(checkoutPage.cartCount).toHaveText('2');
    });
});