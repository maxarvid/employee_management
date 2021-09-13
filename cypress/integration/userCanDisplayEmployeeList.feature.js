describe('Display list of employees', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('displays a header', () => {
    cy.get('#header').should('contain', 'Employee List')
  });

  it('displays a list with 6 items', () => {
    cy.get('#employee-list').within(()=>{
      cy.find('.employee-item').should('have.length', 6)
    })
    
  });
  
})
