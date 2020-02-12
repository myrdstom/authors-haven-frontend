import React from 'react';

describe('Articles', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should show articles', () => {
        cy.get('h3').contains('Where writers meet readers');
    });
    it('should show an article', () => {
        cy.get('.view_article')
            .eq(0)
            .click()
            .get('#article__title')
            .contains('myrdstom');
    });
});
