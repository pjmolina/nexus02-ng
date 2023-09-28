import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoAutorizadoComponent } from './no-autorizado/no-autorizado.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Route[] = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'no-autorizado', component: NoAutorizadoComponent },
  { path: 'planetas', component: PlanetListComponent },
  { path: 'planetas/:id', component: PlanetDetailComponent },
];
