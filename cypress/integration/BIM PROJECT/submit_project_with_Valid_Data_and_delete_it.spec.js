const { faker } = require('@faker-js/faker');

context('Profile -My submission', () => {
    beforeEach(() => {
        cy.visit('https://assist-devqa.netlify.app/')
        cy.login()
    })

    it('Verify if user can submit a project after he complete all fields with valid data,and after subbmison he can delete it as well', () => {

        const pic = 'bim.jpg'
        let projectName = faker.random.word();
        let teamName =  faker.lorem.word();
        let describeProject = faker.lorem.words(10);
        let teamMemberName = faker.name.firstName();
         

        cy.get(' div.logged-menu').click()
        cy.get('div.dropdown-menu > div:nth-child(1)').click()
        cy.get('.btn-def').click()
        cy.get('.project-name > .my-input > input').type(projectName)
        cy.get('.team-name > .my-input > input').type(teamName)
        cy.get( 'div:nth-child(3) > div > textarea').type(describeProject)
        cy.get('.team-member > .my-input > input').type(teamMemberName)
        cy.get(' div.button-data-team-member.addMember').click()
        cy.get('input[type="file"]').attachFile(pic)
        cy.get('.submit-btn').click()
        cy.get('.success-title').should('have.text','Success!')
        cy.get('.logged-menu').click()
        cy.get('.dropdown-menu > :nth-child(1) > span').click()
        cy.get(':nth-child(1) > .btn-def').click()
        cy.get('.fade').should('contain','You successfully delete project:')
        cy.get('.bi').click()
        cy.logout()
        
        
    })
})
