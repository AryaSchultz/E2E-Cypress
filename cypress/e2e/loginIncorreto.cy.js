describe('Pagina de Login', () => { //nome do teste 
    it('Verificar mensagem de campo obrigatorio', () => { //Colocar uma descrição do que o teste deve fazer
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })