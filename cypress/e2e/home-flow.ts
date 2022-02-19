describe('Home Flow', () => {
  it('renders', () => {
    cy.visit('/');
    cy.findByRole('heading', {
      name: /welcome to next\.js!/i,
    }).should('exist');
  });
});
