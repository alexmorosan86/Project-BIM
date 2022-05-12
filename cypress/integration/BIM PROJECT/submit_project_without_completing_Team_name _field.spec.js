const { faker } = require('@faker-js/faker');

context('Profile -My submission', () => {
    beforeEach(() => {
        cy.visit('https://assist-devqa.netlify.app/')
        cy.login()
    })

    it('Verify if user can submit a project after he complete all fields without completing Team name field', () => {

        const pic = 'bim.jpg'
        let projectName = faker.random.word();
        let describeProject = faker.lorem.words(10);
        let teamMemberName = faker.name.firstName();


        cy.get(' div.logged-menu').click()
        cy.get('div.dropdown-menu > div:nth-child(1)').click()
        cy.get('.btn-def').click()
        cy.get('.project-name > .my-input > input').type(projectName)
        cy.get('div:nth-child(3) > div > textarea').type(describeProject)
        cy.get('.team-member > .my-input > input').type(teamMemberName)
        cy.get(' div.button-data-team-member.addMember').click()
        cy.get('input[type="file"]').attachFile(pic)
        cy.get('.submit-btn').click()
        cy.get('.team-name > .submit-input-description').should('contain', 'Team Name is required*')
        cy.logout()


    })
})
