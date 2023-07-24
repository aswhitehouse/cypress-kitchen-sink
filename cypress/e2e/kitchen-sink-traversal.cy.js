describe('Kitchen Sink - Traversal', () => {
    beforeEach(() => {
        cy.wrap('http://localhost:4002').as('url');
    });

    it('Children', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //This finds a starting point class, and then finds children that match
            cy.get('.bread-crumb')
                .children('.li-item')
                .should('contain', 'Contact')
        });
    });

    it('Closest', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //This can be useful, when you want to dive down to a specific anchor point
            //And then traverse back up to an ancestor node
            cy.get('.traversal-anchor')
                .closest('ul')
                .should('have.class', 'a-list');
        });
    });

    it('EQ', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //Gets the first child in .items-main and checks if it contains
            //The provided text
            cy.get('.items-main>li')
                .eq(0)
                .should('contain', 'First Item');
        });
    });

    it('Filter', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //Gets .bread-crumb>li and filters the child .li-items
            //The one that contains 'About'
            cy.get('.bread-crumb>li')
                .filter('.li-item')
                .should('contain', 'About');
        });
    });

    it('Find', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //
            cy.get('.pages').find('li').find('a').should('have.length', 5);
        });
    });

    it('First', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //Get the first element in .test-table, check it's contents
            cy.get('.test-table').first().should('contain', '1')
        });
    });

    it('Last', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //Get the last element in .test-table, check it's contents
            cy.get('.test-table').last().should('contain', '2')
        });
    });

    it('Next', () => { //You can also do prev()
        cy.get('@url').then((url) => {
            cy.visit(url);
            //Get an element containing a certain text under an element, then get the next element
            //Check it's text
            cy.get('.pages-list').contains('One').next().should('contain', 'Two')
        });
    });
    //Skip some similar items.
    it('Parent', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            //Get an element at a particular css, find it's parent and check the value
            cy.get('.inner-mark-one').parent().should('contain', 'Parent Text')
        });
    });
});