describe('Zomato', () => {
  it('passes', () => {
    cy.visit('https://www.zomato.com/');
    cy.xpath("//input[@placeholder='Chennai']").type('mumbai');
    //assertion
    cy.xpath("//input[@placeholder='Chennai']").should('have.value','mumbai');
    cy.xpath("(//p[contains(@class,'sc-kbGplQ')])[2]").click();
    //search dish
    cy.xpath("//input[contains(@class,'sc-fATqzn')]").type("briyani");
    cy.xpath("//input[contains(@class,'sc-fATqzn')]").should('have.value','briyani');
    cy.xpath("(//p[contains(@class,'sc-bLJvFH')])[1]").click();
    //screenshot
    cy.screenshot("Capture");



  

    

  })
})