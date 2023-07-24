describe('Kitchen Sink - Viewport', () => {
    beforeEach(() => {
        cy.wrap('http://localhost:4002').as('url');
    });

    it('Change viewport size', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            cy.viewport('macbook-15')
            cy.wait(200)
            cy.viewport('macbook-13')
            cy.wait(200)
            cy.viewport('macbook-11')
            cy.wait(200)
            cy.viewport('ipad-2')
        });
    });
});