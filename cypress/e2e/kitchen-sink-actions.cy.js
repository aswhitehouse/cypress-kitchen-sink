describe('Kitchen Sink - Actions', () => {
    beforeEach(() => {
      cy.wrap('http://localhost:4002').as('url');
    });
  
    it('Type', () => {
      cy.get('@url').then((url) => {
        cy.visit(url);
        //The essential .get() , with a should be visible check
        cy.get('[data-id="name-field"]').should('be.visible').type("Testing .get").should('have.value', 'Testing .get');
      });
    });

    it('Trigger', () => {
        cy.get('@url').then((url) => {
          cy.visit(url);
          //Trigger a DOM event.
          cy.get('#rangeSlider')
          .invoke('val', 25)
          .trigger('input') // Trigger the 'input' event to update the slider's value
          .then(($range) => {
            // Get the value of the range slider
            const value = $range.val();
            // Assert that the value is updated to 25
            expect(value).to.equal('25');
          });
        
        });
      });

      it('Scroll', () => {
        cy.get('@url').then((url) => {
          cy.visit(url);
          //Scroll to an element
          cy.get('.scroll-box').scrollIntoView();
        });
      });
  });
  