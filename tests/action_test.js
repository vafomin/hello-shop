/* eslint-disable */

Feature("Action tests");

Scenario("Click cart test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);

  I.click({ id: "cart-button" });

  I.see("Cart");
});

Scenario("Click add to cart test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);

  I.click({ id: "add-to-cart-button" });

  I.see("Product added to cart");
});

Scenario("Delete item from cart test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);

  I.click({ id: "add-to-cart-button" });
  I.see("Product added to cart");

  I.click({ id: "cart-button" });
  I.see("Cart");

  I.click({ id: "delete-item-0" });
  I.see("Product removed from cart!");
});

Scenario("Clear cart test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);

  I.click({ id: "add-to-cart-button" });
  I.see("Product added to cart");

  I.click({ id: "cart-button" });
  I.see("Cart");

  I.click({ id: "clear-cart" });
  I.see("Cart is empty");
});

Scenario("Click like test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);

  I.click({ id: "heart" });
  I.seeElement({
    id: "fill-heart",
  });
});
