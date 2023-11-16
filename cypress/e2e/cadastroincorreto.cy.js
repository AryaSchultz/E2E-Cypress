describe('Pagina de Cadastro', () => { //nome do teste 
    it('Preecher os campos do formulario incorretamente', () => { //Colocar uma descrição do que o teste deve fazer
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.contains('a','Register now').click();
      cy.contains('button','Register').click();
      cy.contains('button','Register').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');

    })
  })