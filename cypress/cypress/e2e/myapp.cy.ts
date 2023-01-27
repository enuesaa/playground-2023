describe('template spec', () => {
  it('valid link', () => {
    cy.visit('http://localhost:3000')
    cy.get('a').eq(1).click()
    cy.get('h2').should('contain', 'about')
  })
  it('invalid link', () => {
    cy.visit('http://localhost:3000')
    cy.get('a').eq(2).click()
    cy.get('h2').should('contain', 'about')
  })
})