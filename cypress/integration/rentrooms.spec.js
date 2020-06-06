/* eslint-disable no-undef */
describe('rent_rooms test', () => {

   it('visit', () => {
      cy.visit('/');

   });
   it('searchbar Button exists', () => {
      cy.get('.searchbar-button')
         .should('be.visible')
   });

   it('selected city exists', () => {
      cy.get('.option-selected')
         .should('be.visible')
   });

   it('Start data exists', () => {
      cy.get('.date-container-left')
         .should('be.visible')
   });

   it('final date exists', () => {
      cy.get('.date-container-right')
         .should('be.visible')

   });
   it('select Bogota ', () => {

      cy.get('.option-selected').click();
      cy.get('.dropdown-container--opened > :nth-child(2)').click()
   });

   it('Search   ', () => {
      cy.get('.date-container-left')
         .type("6/22/2020")
         .should('have.value', '6/22/2020');
      cy.get('.date-container-right')
         .type("6/25/2020")
         .should('have.value', '6/25/2020');
      cy.wait(2000)
      cy.get('.searchbar-button').click();
      cy.wait(4000)

   });

   it('card-resume details title exists  ', () => {
      cy.get(':nth-child(1) > .card-resume-title')
         .should('be.visible')
   });

   it('card-resume details image resume exists  ', () => {
      cy.get(':nth-child(1) > .image-vysor-container > .image-vysor-resume')
         .should('be.visible')
   });


   it('card-resume details description exists  ', () => {
      cy.get(':nth-child(1) > .image-vysor-container > .image-vysor-description > span')
         .should('be.visible')
   });

   it('card-resume details realstate exists  ', () => {
      cy.get(':nth-child(1) > .card-resume-realstate')
         .should('be.visible')
   });


   it('select room   ', () => {
      cy.get(':nth-child(1) > .image-vysor-container > .image-vysor-resume').click()
      cy.wait(2000)

   });

   it('card details title exists  ', () => {
      cy.get('.card-details-title')
         .should('be.visible')
   });

   it('card details description exists  ', () => {
      cy.get('p')
         .should('be.visible')
   });

   it('card details city exists  ', () => {
      cy.get('.card-details-city')
         .should('be.visible')
   });

   it('card details price exists  ', () => {
      cy.get('.card-details-price')
         .should('be.visible')
   });

   it('card image  exists  ', () => {
      cy.get('.image-vysor-details')
         .should('be.visible')
   });

   it('card rating  exists  ', () => {
      cy.get('.image-vysor-description > div')
         .should('be.visible')
   });



   it('card realstate  exists  ', () => {
      cy.get('.card-details-realstate > span')
         .should('be.visible')
   });


   it('card services  exists  ', () => {
      cy.get('.card-details-services > b')
         .should('be.visible')
   });

   it('booking boutton exists   ', () => {

      cy.get('.card-details-button')
         .should('be.visible')

   });

   it('back home', () => {

      cy.wait(2000)
      cy.get(':nth-child(2) > img').click()
   });


   it('Login button exists', () => {

      cy.get('.left > a')
         .should('be.visible')
         .click()
   });

   it('Login with google exists', () => {

      cy.get('.loginBtn--google')
         .should('be.visible')

   });

   it('Login with facebook exists', () => {

      cy.get('.loginBtn--facebook')
         .should('be.visible')

   });
});