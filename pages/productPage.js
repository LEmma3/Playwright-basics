class ProductPage {
  constructor(page) {
    this.page = page;

    this.favouriteButton = page.locator('[data-test="add-to-favorites"]');
    this.productTitle = page.locator('[data-test="product-name"]');
  }

  async addToFavourites() {
    await this.favouriteButton.click();
  }

  async getTitle() {
    return await this.productTitle.textContent();
  }
}

module.exports = ProductPage;