describe('Pagina de Login', () => { //nome do teste 
    it('Verificar quando colcoamos dados errados o login é imepedido', () => { //Colocar uma descrição do que o teste deve fazer
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
   
      cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login',{
        statusCode:400
      }).as('stubPost')

      it('Devefalhar mesmo que os campos sejam preechidos corretamente', () =>{
        cy.login('carowl','12345678');
        cy.wait('@stubPost');
      })


    })
  })