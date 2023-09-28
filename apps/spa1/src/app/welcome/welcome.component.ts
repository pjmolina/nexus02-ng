import { Component } from '@angular/core';

@Component({
  selector: 'org-welcome',
  template: `<div>
    <a id="login" [routerLink]="['/login']">Acceder</a>
  </div>`,
})
export class WelcomeComponent {}
