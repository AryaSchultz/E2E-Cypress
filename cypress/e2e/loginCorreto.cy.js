describe('Pagina de Login', () => { //nome do teste 
  beforeEach (() =>{
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

    it('Verificar quando colocado usuarios corretos login está sendo feito', () => { //Colocar uma descrição do que o teste deve fazer
        
    cy.login('catarinap','catarina123');
    })
})