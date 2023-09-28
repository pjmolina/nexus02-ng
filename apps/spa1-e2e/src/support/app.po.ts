export const getGreeting = () => cy.get('h1');
export const enlaceLogin = () => cy.get('#login');

// login
export const inputUser = () => cy.get('#user');
export const inputPasword = () => cy.get('#password');
export const buttonLogin = () => cy.get('#login');

// no auth
export const noAutorizado = () => cy.get('h1');

// selectores pagina listado de planetas
export const primerPlaneta = () => cy.get('.nombre');
