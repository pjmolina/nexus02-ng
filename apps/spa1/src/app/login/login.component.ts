import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'org-login',
  template: `<div>
    <input id="user" [(ngModel)]="user" />
    <input id="password" type="password" id="password" [(ngModel)]="password" />
    <button id="login" (click)="login()">Entrar</button>
  </div>`,
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.user === 'usuario' && this.password === '1234') {
      // pasa
      this.router.navigate(['/planetas']);
    } else {
      // no pasa
      // ...
      this.router.navigate(['/no-autorizado']);
    }
  }
}
