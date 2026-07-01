const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Price filter feature', () => {

    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('should open the Toolshop home page', async ({ page }) => {
        await expect(page).toHaveURL(/practicesoftwaretesting.com/);
    });

    test('should set price filter between 50 and 100', async () => {
        await homePage.setPriceRange(50, 100);

        await expect(homePage.priceFilterMin).toHaveAttribute('aria-valuenow', '50');

        await expect(homePage.priceFilterMax).toHaveAttribute('aria-valuenow', '100');

        const prices = await homePage.getProductPrices();

        console.log(prices);

        prices.forEach(price => {
            expect(price).toBeGreaterThanOrEqual(49.99);
            expect(price).toBeLessThanOrEqual(100);
        });
    });

});