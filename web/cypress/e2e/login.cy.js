//Describe serve para agrupar um conjunto de testes automatizados
//It implemneta um teste automatizado
describe('Login', ()=>{
  it('Deve logar com sucesso', ()=> {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com') //A função type é utilizada para elementos com entradas de dados
    cy.get('#password').type('katana123')

    //cy.get('.bg-\[\#8257E5\]') - Esse formatop nãoé um localizador válido para o cypress
    cy.contains('button', 'Entrar').click()
    cy.wait(3000)
  })
})