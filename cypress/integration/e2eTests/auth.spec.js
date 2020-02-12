import React from 'react';

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should register a user', () => {
        const username = 'aretha';
        const email = 'aretha@gmail.com';
        const password = 'P@ssw0rd';
        const confirmPassword = 'Password';
        cy.visit('/register');
        cy.get('#username')
            .type(username)
            .get('#email')
            .type(email)
            .get('#password')
            .type(password)
            .get('#confirmPassword')
            .type(confirmPassword);
    });
    it('It should login a user', () => {
        const email = 'nserekopaul@gmail.com';
        const password = 'P@ssw0rd';
        cy.visit('/login');
        cy.get('#email')
            .type(email)
            .get('#password')
            .type(password)
            .get('#loginForm')
            .submit()
            .get('h3')
            .contains('Where writers meet readers');
    });
});
