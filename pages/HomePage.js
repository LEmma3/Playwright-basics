class HomePage {

    constructor(page) {
        this.page = page;

        this.priceFilterMin = page.locator('.ngx-slider-pointer-min');
        this.priceFilterMax = page.locator('.ngx-slider-pointer-max');
        this.productPrices = page.locator('span[data-test="product-price"]');
        
        this.searchInput = page.locator('[data-test="search-query"]');
        this.productCards = page.locator('[data-test="product-name"]');
        this.homeButton = page.locator('[data-test="nav-home"]');
        this.menuButton = page.locator('[data-test="nav-menu"]');
        this.myFavoritesLink = page.locator('[data-test="nav-my-favorites"]');

    }

    async open() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async setPriceRange(min = 50, max = 100) {

        await this.priceFilterMin.waitFor();
        await this.priceFilterMax.waitFor();

        const currentMin = parseInt(
            await this.priceFilterMin.getAttribute('aria-valuenow')
        );

        await this.priceFilterMin.focus();

        for (let i = 1; i < min; i++) {
            await this.page.keyboard.press('ArrowRight');
        }

        const currentMax = parseInt(
            await this.priceFilterMax.getAttribute('aria-valuenow')
        );

        await this.priceFilterMax.focus();

        for (let i = currentMax; i > max; i--) {
            await this.page.keyboard.press('ArrowLeft');
        }

        await this.page.waitForLoadState('networkidle');
    }

    async getProductPrices() {

        const prices = await this.productPrices.allTextContents();

        return prices.map(price =>
            parseFloat(price.replace('$', ''))
        );
    }

    async searchForProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
    }

  async openProductByName(productName) {
    await this.page
      .locator('[data-test="product-name"]', { hasText: productName })
      .first()
      .click();
  }
}

module.exports = HomePage;