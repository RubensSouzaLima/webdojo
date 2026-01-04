describe('Formulário de consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')

        cy.get('input[placeholder="Digite seu email"]').type('papito@teste.com.br')

        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 99999-8888')
            .should('have.value', '(11) 99999-8888')

        ////label[text()="Tipo de Consultoria"]/..//select
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        ////span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')
    });
});
