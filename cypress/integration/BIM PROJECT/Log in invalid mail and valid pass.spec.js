context('Log in ', () => {
  beforeEach(() => {
    cy.visit('https://assist-devqa.netlify.app/')

  })

  it('I should not bee able to log in with invalid mail and vaild password', () => {
    cy.get('div.more-action > div:nth-child(1) > div').click()
    cy.get('.login-container > :nth-child(2)').click()
    cy.get(':nth-child(1) > .info-detail > input').type('uuser20@test.com')
    cy.get(':nth-child(2) > .info-detail > input').type('user123456')
    cy.get('.submit-btn').click()
    cy.get(':nth-child(1) > .info-detail > input').click().should('have.text', 'Please enter a valid email')

  })
})