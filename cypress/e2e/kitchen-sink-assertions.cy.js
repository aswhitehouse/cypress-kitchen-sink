describe('Kitchen Sink - Assertions', () => {
    beforeEach(() => {
      cy.wrap('http://localhost:4002').as('url');
    });
  
    it('Assertions', () => {
      cy.get('@url').then((url) => {
        cy.visit(url);
        //Implicit Assertions
        //should,and
        cy.get('.some-text').should('have.text', 'Some Text');
        //Explicit Assertions
        //expect,assert
        expect(true).to.be.true;
        const person = {
            name: 'Joe',
            age: 20,
          }
          assert.isObject(person, 'value is object');
      });
    });
});