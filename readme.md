## Cypress Kitchen Sink - Examples

# Selector best practices:
1. Use data attributes e.g. ([data-id])
- <button data-cy"submit">
- cy.get('[data-cy="submit"]').click();
- Why? The attribute is much less likely to change!

2. Sometimes use: (#id)
- <button id="submit">
- cy.get('#submit').click();
- Why ? You're targeting a specific element by it's ID which is less prone to ambiguity
- Why NOT ? Because it tightly couples the selector to the DOM, making it brittle bia location changes
For Example:
- <button id="submit"> targeted by cy.get('#submit');
- I refactor it to <div class="element-container"><button id="submit">
- You would need to make this cy.get('.element-container #submit');

# Return values best practices & context sharing:
- DO NOT! Assign function returns to let/var/const etc.
- Instead, use closures
*Variable assignments aren't required in Cypress the way we would typically do this in other automation libraries - Instead, yield the elements you need to the commands such as - .then()
- .then() <- calls back to the previous code (Similar to a Promise)

cy.get('element-id').then(($ele) =>{
    //Do something with $ele
});

//Continue using $ele
- In this situation $ele is mutable, and therefore can be used with const/etc.

- But how to use this to pass data around?
- ALIASES:

beforeEach(() => {
    cy.get('button').invoke('text').as('text');
});

it('can access outside', function() {
    this.text <- The value is accessible
});

- FIXTURES:
- The same concept but using cy.fixture('file').as('users');

# Cypress Kitchen Sink - cypress/e2e
-> First run from the command line >node server.js

- kitchen-sink-querying.cy.js
1. get
2. contains
3. within
4. root
5. Selectors best practices

- kitchen-sink-traversal.cy.js
1. children
2. closest
3. eq
4. filter
5. find
6. first
7. last
8. next
9. parent

- kitchen-sink-actions.cy.js
1. type
2. 

