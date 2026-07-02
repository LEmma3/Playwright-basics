class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.productQuantity = page.locator('[data-test="product-quantity"]');
        this.totalPrice = page.locator('[data-test="line-price"]');
        this.cartCount = page.locator('#lblCartCount');
        this.productName = page.locator('[data-test="product-title"]');
    }
}

module.exports = CheckoutPage;

