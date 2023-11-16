describe('Pagina de Login', () => { //nome do teste 
    it('Verificar quando colcoamos dados errados o login é imepedido', () => { //Colocar uma descrição do que o teste deve fazer
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.get('[data-test="loginUserName"]').type('testeerro');
      cy.get('[data-test="loginPassword"]').type('12345678w');
      cy.contains('button','login').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Invalid user name or password')
      })

    })
  })