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




Cypress.Commands.add('login', () => { 
    cy.get('div.more-action > div:nth-child(1) > div').click()
    cy.get('.login-container > :nth-child(2)').click()
    cy.get(':nth-child(1) > .info-detail > input').type('user20@test.com')
    cy.get(':nth-child(2) > .info-detail > input').type('user123456')
    cy.get('.submit-btn').click()
})


Cypress.Commands.add('logout', () => { 
    cy.get(' div.logged-menu').click()
    cy.get(' div.dropdown-menu > div:nth-child(2) > span').click()
    
})

import 'cypress-file-upload';
