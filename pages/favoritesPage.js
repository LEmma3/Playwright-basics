class FavoritesPage {
  constructor(page) {
    this.page = page;

    this.favoriteItems = page.locator('[data-test="product-name"]');
  }

}

module.exports = FavoritesPage;