class FavoritesPage {
  constructor(page) {
    this.page = page;

    this.favoriteItems = page.locator('[data-test="product-name"]');
  }

  async isProductDisplayed(productName) {
    return await this.favoriteItems
      .filter({ hasText: productName })
      .count() > 0;
  }
}

module.exports = FavoritesPage;