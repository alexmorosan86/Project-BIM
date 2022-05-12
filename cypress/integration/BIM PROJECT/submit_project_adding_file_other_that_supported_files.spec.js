const { faker } = require('@faker-js/faker');

context('Profile -My submission', () => {
    beforeEach(() => {
        cy.visit('https://assist-devqa.netlify.app/')
        cy.login()
    })

    it('Verify if user can submit a project after he adding a file other that supported files', () => {

        const document = 'bim.docx'//Supported files types are: PPT, MP4, JPG, PNG
        let projectName = faker.random.word();
        let teamName = faker.lorem.word();
        let describeProject = faker.lorem.words(10);
        let teamMemberName = faker.name.firstName();


        cy.get(' div.logged-menu').click()
        cy.get('div.dropdown-menu > div:nth-child(1)').click()
        cy.get('.btn-def').click()
        cy.get('.project-name > .my-input > input').type(projectName)
        cy.get('.team-name > .my-input > input').type(teamName)
        cy.get('div:nth-child(3) > div > textarea').type(describeProject)
        cy.get('.team-member > .my-input > input').type(teamMemberName)
        cy.get(' div.button-data-team-member.addMember').click()
        cy.get('input[type="file"]').attachFile(document)
        cy.get('.submit-btn').click()
        cy.get('.success-title').should('have.text', 'Success!')
        cy.get('.logged-menu').click()
        cy.get('.dropdown-menu > :nth-child(1) > span').click()
        cy.get(':nth-child(1) > .btn-def').click()
        cy.get('.description-file').should('contain', 'Please insert supported file')


    })
})
