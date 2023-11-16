describe('Pagina de Cadastro', () => { //nome do teste 
  it('Preecher os campos do formulario corretamente para cadastrar um novo usuario', () => { //Colocar uma descrição do que o teste deve fazer
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('aryadne@email.com.br');
    cy.get('[data-test="fullName"]').type('Aryadne Schultz');
    cy.get('[data-test="registerUserName"]').type('aryas');
    cy.get('[data-test="registerPassword"]').type('123456789');
    cy.contains('button','Register').click();
  })
})