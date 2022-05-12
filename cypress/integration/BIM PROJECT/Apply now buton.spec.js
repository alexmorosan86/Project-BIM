context('Homepage ', () => {
    beforeEach(() => {
      cy.visit('https://assist-devqa.netlify.app/')
      
    })
  
    it('When i click on apply now button i should see a page with regulations', () => {
        cy.get(':nth-child(2) > .btn-def').click()
        cy.get(':nth-child(2) > .btn-def').should('exist')
        
     
      
        })
    })