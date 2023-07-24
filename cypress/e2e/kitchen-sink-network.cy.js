describe('Kitchen Sink - Network', () => {
    beforeEach(() => {
        cy.wrap('http://localhost:4002').as('url');
    });

    it('Get req.', () => {
        cy.get('@url').then((url) => {
            //cy.visit(url);
            cy.request(url)
                .should((response) => {
                expect(response.status).to.eq(200);
  });
        });
    });
});