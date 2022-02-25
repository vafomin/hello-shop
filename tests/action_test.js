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

Scenario("Click like test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);

  I.click({ id: "heart" });
  I.seeElement({
    id: "fill-heart",
  });
});
