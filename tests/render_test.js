/* eslint-disable */

Feature("Render test");

Scenario("Home render test", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);
  I.seeElement({
    react: "Card",
  });
});
