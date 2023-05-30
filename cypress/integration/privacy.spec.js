//Exercício extra 2 - Desafio
it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About logo').should('be.visible')
    
});
