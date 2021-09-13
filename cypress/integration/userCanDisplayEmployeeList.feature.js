describe('Display list of employees', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('displays a header', () => {
    cy.get('#header').should('contain', 'Employee List')
  });
  
})
