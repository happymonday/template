describe("User Form", function() {
  it("submits a user", function() {
    cy.visit("/");
    cy.contains("First Name").click();
    cy.focused().type("Alice");

    cy.contains("Last Name").click();
    cy.focused().type("Aardvark");

    cy.contains("Address").click();
    cy.focused().type("123 Example St, Phoenix, AZ 85018");

    cy.contains("button", "Submit").click();

    cy.contains("First Name: Alice");
    cy.contains("Last Name: Aardvark");
    cy.contains("Address: 123 Example St, Phoenix, AZ 85018");
  }); 
});