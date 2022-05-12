context('Homepage', () => {
    beforeEach(() => {
      cy.visit('https://assist-devqa.netlify.app/')
      
    })
  
    it('When I click on BIM 2021 button, I should to be able to se a page with a description, prizes and membres of the jury', () => {
      cy.get('[href="/bim"]').click()
      cy.get('[href="/bim"]').should('exist')
      
        })

    })