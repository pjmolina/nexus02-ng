import {
  buttonLogin,
  enlaceLogin,
  getGreeting,
  inputPasword,
  inputUser,
  noAutorizado,
  primerPlaneta,
} from '../support/app.po';

describe('spa1', () => {
  beforeEach(() => cy.visit('/'));

  xit('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome spa1');
  });

  it('deberia ver planetas si se la contraseña', () => {
    enlaceLogin().click();

    login('usuario', '1234');

    primerPlaneta().contains('Tatooine');
  });
  it('deberia llevarme a no autrizado si no se la contraseña', () => {
    enlaceLogin().click();

    login('z', 'no password');

    noAutorizado().contains('No autorizado');
  });
});

const login = (user: string, pass: string): void => {
  inputUser().type(user);
  inputPasword().type(pass);
  buttonLogin().click();
};
