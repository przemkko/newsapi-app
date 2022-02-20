describe('Home Flow', () => {
  it('renders', () => {
    cy.visit('/');
    cy.findByRole('link', {
      name: /Top News/i,
    }).should('exist');
  });
});
