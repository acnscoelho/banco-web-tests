describe('Transferências', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia('João', 'Maria', '11')
        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

        it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        //  Act    
        cy.realizarTransferencia('João', 'Maria', '1800')

        // Assert    
        cy.verificarMensagemNoToast('Saldo insuficiente para realizar a transferência.')
    })
})