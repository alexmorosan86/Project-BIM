context('Homepage ', () => {
    beforeEach(() => {
      cy.visit('https://assist-devqa.netlify.app/')
      
    })
  
    it('When i click on History button i should see a page with projects from 2021, 2020', () => {
        cy.get('[href="/history"]').click()
        cy.get('[href="/history"]').should('exist')
     
      
        })
    })