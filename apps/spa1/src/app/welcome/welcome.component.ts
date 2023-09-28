import { Component } from '@angular/core';

@Component({
  selector: 'org-welcome',
  template: `<div>
    <a [routerLink]="['/login']">Acceder</a>
  </div>`,
})
export class WelcomeComponent {}
