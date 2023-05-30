// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    cy.get('#firstName').type('Isadora Laís')
    cy.get('#lastName').type('Louise Lima')
    cy.get('#email').type('isadora-lima75@andrade.com')
    cy.get('#phone').type('1234567890')
    cy.get('#product').select('Blog')
    //Tipo de atendimento
    cy.get('#support-type > :nth-child(2)').click()
    cy.get('#support-type > :nth-child(3)').click()
    cy.get('#support-type > :nth-child(4)').click()
    //Qual seu meio de contato preferencial?
    cy.get('#email-checkbox').click()
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('texto')
    cy.get('.button').click()
    cy.get('#white-background').should('be.visible', '')
})