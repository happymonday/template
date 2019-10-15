var faker = require('faker');

describe("User Form", function() {
  const userSubmit = () => {
    cy.visit("/");
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const address = faker.address.streetAddress();
    
    cy.contains("Open User Form").click();
    
    cy.contains("First Name").click();
    cy.focused().type(firstName);

    cy.contains("Last Name").click();
    cy.focused().type(lastName);

    cy.contains("Address").click();
    cy.focused().type(address);

    cy.contains("button", "Submit").click();

    cy.contains(`First Name: ${firstName}`);
    cy.contains(`Last Name: ${lastName}`);
    cy.contains(`Address: ${address}`);
  }

  it("submits a user", function() {
    userSubmit();
  });

  it("submits multiple users", function() {
    userSubmit();

    userSubmit();

    userSubmit();
  });
});