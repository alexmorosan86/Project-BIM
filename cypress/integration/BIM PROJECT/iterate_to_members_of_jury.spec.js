context('BIM - 2021 - Meet the jury', () => {
    beforeEach(() => {
        cy.visit('https://assist-devqa.netlify.app/')

    })


    it('Iterate over the members of the jury', () => {

        cy.get('[href="/history"]').click()
        cy.get('div.history-container > div:nth-child(1)')
            .each(($el, index, $list) => {
                cy.wrap($el)

            })

    })
})
