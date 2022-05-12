
context('Profile -My submission', () => {
    beforeEach(() => {
        cy.visit('https://assist-devqa.netlify.app/')
        cy.login()
    })

    it('Verify if user can submit a project with all fields blank', () => {
        cy.get(' div.logged-menu').click()
        cy.get('div.dropdown-menu > div:nth-child(1)').click()
        cy.get('.btn-def').click()
        cy.get('.submit-btn').click()
        cy.get('.project-name > .submit-input-description').should('contain', 'Project name is required*')
        cy.logout()

        
        
        
    })
})
