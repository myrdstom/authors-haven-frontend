import React from 'react';

describe('Profile', () => {
    beforeEach(() => {
        const email = 'nserekopaul@gmail.com';
        const password = 'P@ssw0rd';
        cy.visit('/login');
        cy.get('#email')
            .type(email)
            .get('#password')
            .type(password)
            .get('#loginForm')
            .submit();
    });

    it("should view the user's profile", () => {
        cy.get('#avatar-image-icon')
            .click({ multiple: true })
            .get('.profile__element')
            .contains('nserekopaul@gmail.com')
            .get('.authentication__register--link')
            .click({ multiple: true });
    });
    it("should edit the user's profile", () => {
        cy.get('#avatar-image-icon')
            .click({ multiple: true })
            .get('.profile__element')
            .contains('nserekopaul@gmail.com')
            .get('.edit_button')
            .click()
            .get('#firstName')
            .type('aretha')
            .get('.authentication__register--link')
            .click({ multiple: true });
    });
});
