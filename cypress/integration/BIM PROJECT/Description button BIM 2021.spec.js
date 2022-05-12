context('Homepage ', () => {
    beforeEach(() => {
      cy.visit('https://assist-devqa.netlify.app/')
      
    })

    it('When i click description  button i should see a page with a description, and team members', () => {
        cy.get('[href="/bim"]').click()
        cy.get('.jury-navigation > :nth-child(1)').click()
        cy.get('[href="/bim"]').should('exist')
     
      
        })
    })