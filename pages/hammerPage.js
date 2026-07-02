const { expect } = require('@playwright/test');
class HammerPage{

    constructor(page) {
        this.page = page;

        this.productName = page.locator('[data-test="product-name"]');
        this.productPrice = page.locator('[data-test="unit-price"]');
        this.increaseQuantity = page.locator('[data-test="increase-quantity"]');
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.cartButton = page.locator('[data-test="nav-cart"]');
    }

    async openProductByName(productName) {
        const product = this.page.locator(`//h5[normalize-space()="${productName}"]`);
        await expect(product).toBeVisible();
        await product.click();
    }

}

module.exports = HammerPage;