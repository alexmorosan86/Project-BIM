context('Homepage, Log In Section ', () => {
  beforeEach(() => {
    cy.visit('https://assist-devqa.netlify.app/')
    
  })

  it('When i click on Log In as guest button, and I provide a valid PIN, I should be able to succesfully log in ', () => {
    cy.get(':nth-child(1) > .btn-def').click()
    cy.get('.guest').click()
    cy.get('input').type(123456)
    cy.get('.submit-btn').click()
    cy.get('.submit-btn').should('exist')
  })
})