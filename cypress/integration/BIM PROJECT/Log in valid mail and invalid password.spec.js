context('Log in ', () => {
    beforeEach(() => {
      cy.visit('https://assist-devqa.netlify.app/')
      
    })
  
    it('I should not be  able to log in with valid mail and invaild password', () => {
      cy.get('div.more-action > div:nth-child(1) > div').click()
      cy.get('.login-container > :nth-child(2)').click()
      cy.get(':nth-child(1) > .info-detail > input').type('user20@test.com')
      cy.get(':nth-child(2) > .info-detail > input').type('user1234567')
      cy.get(':nth-child(2) > .info-detail > input').click()
      cy.get(':nth-child(2) > .info-detail > input').should('have.text', 'please enter a valid password')
      
        })
    })
  