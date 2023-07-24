describe('Kitchen Sink - Location', () => {
    beforeEach(() => {
        cy.wrap('http://localhost:4002').as('url');
    });

    it('Get location details', () => {
        cy.get('@url').then((url) => {
            cy.visit(url);
            cy.location().should((location) => {
                expect(location.hash).to.be.empty
                expect(location.href).to.eq('http://localhost:4002/')
                expect(location.host).to.eq('localhost:4002')
                expect(location.hostname).to.eq('localhost')
                expect(location.port).to.eq('4002')
                expect(location.protocol).to.eq('http:')
              });
        });
    });
});