/* eslint-disable no-undef */
describe('rent_rooms test' , () =>{
   
    it('visit',()=>{
        cy.visit('/');
        
    });
    it('Button exists', () => {
        cy.get('button');
     });
     
     it('Input exists', () => {
         cy.get('input');
      });

    
      /*
      it('login', ()=>{
        cy.pause()
        cy.get('#root > :nth-child(2) > .navbar > .left > [href="/home"]').click()
        cy.get('.loginBtn--google').click()
        
     });

     describe('log in with google', ()=>{
        it('should work', ()=>{
          cy.visit('http://localhost:3000/')
          cy.contains('Log in with Google').click()
          cy.get("input#identifierId").type('gohawks12x3@gmail.com{enter}');
          cy.wait(5000);
          cy.get("input[@type=password]").type('<Pwd>{enter}');
        })
      })
*/
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
        cy.wait(2000)
        
     });

     it('select room   ', () => {   
        cy.get(':nth-child(1) > .image-vysor-container > .image-vysor-resume').click()
        cy.wait(2000)
       
        cy.get('#email').click()
        .type('fredy.arroyave19@gmail.com')
        .should('have.value', 'fredy.arroyave19@gmail.com')
     });
  
     it('Reserv   ', () => {   
        
        cy.get('.card-details-button').click()
          
        
     });

     it('back home', ()=>{
         
        cy.wait(2000)
        cy.get(':nth-child(2) > img').click()
     });

     it('booking', ()=>{
        cy.get('#root > :nth-child(2) > .navbar > .left > [href="/booking"]').click()
    });

    });