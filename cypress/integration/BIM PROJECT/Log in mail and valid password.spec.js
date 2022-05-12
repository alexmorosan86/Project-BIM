context('Log in ', () => {
  beforeEach(() => {
    cy.visit('https://assist-devqa.netlify.app/')
    
  })

  it('I should be able to log in with valid mail and vaild password', () => {
    cy.get('div.more-action > div:nth-child(1) > div').click()
    cy.get('.login-container > :nth-child(2)').click()
    cy.get(':nth-child(1) > .info-detail > input').type('user20@test.com')
    cy.get(':nth-child(2) > .info-detail > input').type('user123456')
    cy.get('.submit-btn').click()
    cy.url().should('eq', 'https://assist-devqa.netlify.app/home')
   
      })
  })

  