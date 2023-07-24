describe('Kitchen Sink - Window', () => {
    beforeEach(() => {
        cy.wrap('http://localhost:4002').as('url');
    });

    it('Get Window & Document', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            cy.window().should('have.property', 'top');
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
            cy.title().should('include', 'My Web Page');
        });
    });
});