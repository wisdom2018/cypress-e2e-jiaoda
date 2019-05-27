
describe("user buy something in Tall", () => {
  it("user search one good then add to shooping car", () => {
      cy.visit("https://www.jd.com/2017");
      cy.get("#key").type("mobile");
      cy.get("#search > div > div.form > button").click();
      cy.get("#J_goodsList > ul > li:nth-child(7) > div > div.p-operate > a.p-o-btn.addcart").scrollIntoView()
      .should('be.visible');
      cy.get("#brand-16413 > a").click();
      cy.get("#J_goodsList > ul > li > div > div.p-operate > a.p-o-btn.addcart").click();
      cy.wait(5000);
  });
  after(() => {
    cy.clearCookies();
  });
});
