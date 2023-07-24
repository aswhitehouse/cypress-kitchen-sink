describe('Kitchen Sink - Querying', () => {
  beforeEach(() => {
    cy.wrap('http://localhost:4002').as('url');
  });

  it('Get', () => {
    cy.get('@url').then((url) => {
      cy.visit(url);
      cy.get('[data-id="name-field"]').should('be.visible').type("Testing .get");
    });
  });
  it('Contains', () => {
    cy.get('@url').then((url) => {
      cy.visit(url);
      cy.get('.items-main').contains('First Item').should('have.class', 'First');
    });
  });
  it('Within', () => {
    cy.get('@url').then((url) => {
      cy.visit(url);
        cy.get('.some-values').within(() => {
        cy.get('input:first').should('have.attr', 'test-attribute', 'test-value2');
        cy.get('input:last').should('have.attr', 'test-attribute', 'test-value3');
      });
    });
  });
  it('Root', () => {
    cy.get('@url').then((url) => {
      cy.visit(url);
        cy.root().should('match', 'html');
        cy.get('.some-values').within(() => {
          cy.root().should('have.class', 'some-values');
      });
    });
  });
  it('Selectors Best Practices', () => {
    cy.get('@url').then((url) => {
      cy.visit(url);
      // Better. But still coupled to styling or JS event listeners.
      cy.get('#button-id').click();
      // Slightly better. Uses an ID but also ensures the element
      // has an ARIA role attribute
      cy.get('#button-id[role=vis-btn]').click();
      // Much better. But still coupled to text content that may change.
      cy.contains('Button with ID').click();
      // Best. Insulated from all changes.
      cy.get('[data-id=data-attr-btn]').click();
    });
  })
});
