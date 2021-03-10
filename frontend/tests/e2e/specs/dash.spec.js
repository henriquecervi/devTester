// https://docs.cypress.io/api/introduction/api.html

describe('Dashboard Teste', () => {
  it('Acessar Dashboard', () => {
    cy.visit('/dashboard')
    cy.contains('h1', 'Seu gerenciador digital de contatos')
    cy.contains('h1', 'contatos')
  })
})
