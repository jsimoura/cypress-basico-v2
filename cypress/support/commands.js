Cypress.Commands.add(`fillMandatoryFieldsAndSubmit`, function() {
    cy.get('#firstName').type('Jhonatan')
    cy.get('#lastName').type('Simoura')
    cy.get('#email').type('Jhonatan@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})
