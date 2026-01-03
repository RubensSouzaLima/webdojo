//Describe serve para agrupar um conjunto de testes automatizados
//It implemneta um teste automatizado
describe('Login', ()=>{
  it('Deve logar com sucesso', ()=> {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })

  it('Não deve logar com senha inválida', ()=> {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')      
  })

  it('Não deve logar com e-mail inválido', ()=> {
    cy.iniciar()
    cy.submeterLogin('404@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')      
  })
})