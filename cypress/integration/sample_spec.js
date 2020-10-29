describe('My first Cypress test', function() {

    // Test 1
    it('Visits the page', function() {
        cy.visit('http://localhost:3000/') // visit the page

        cy.pause() // debugging command; pauses after visiting the page
        
        // expect(true).to.equal(true) // assertion that passes
        // expect(true).to.equal(false) // assertion that fails

    })

    // Test 2
    it('Checks the content', function() {
        cy.contains('number') // find an element that contains the string "number"
    })

    // Test 3
    it('Checks the click option', function() {
        cy.contains('Inc').click() // check if user can click
    })

    // Test 4
    it('Tests the url', function() { // will fail because the url doesn't include '/home'
        cy.url()
            .should('include', '/home') // an assertion
    })

    // Test 5
    it('Finds an element with exact css class', function() {
        cy.get('.counter__wrapper') // check if there is an element with class 'counter__wrapper' on the page
    })
})