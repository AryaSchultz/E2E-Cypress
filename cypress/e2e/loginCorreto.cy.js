describe('Pagina de Login', () => { //nome do teste 
    it('Verificar quando colocado usuarios corretos login está sendo feito', () => { //Colocar uma descrição do que o teste deve fazer
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.get('[data-test="loginUserName"]').type('carowl');
      cy.get('[data-test="loginPassword"]').type('12345678');
      cy.contains('button','login').click();
    })
  })