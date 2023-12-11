describe('Testando Api AluraPic', () => {
    it('Dados da Api', () => { 
     cy.request({
        method:'POST',
        url: 'http://alurapic-api.onrender.com/user/login',
        body: Cypress.env()
     }).then((res) => {
        expect(res.status).to.be.equal(200)
        exepct(res.body).is.not.empty
        expect(res.body).to.have.property('id')
        exepct(res.body.id).to.be.equal(4)
     })
    })
  })