    Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
        cy.get('#firstName').type('Vinícius');
        cy.get('#lastName').type('Lopes');
        cy.get('#email').type('teste@hotmail.com');
        cy.get('#open-text-area').type('teste');
        cy.contains('button', 'Enviar').click();
    })