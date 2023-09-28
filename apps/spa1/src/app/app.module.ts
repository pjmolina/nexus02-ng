import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    DialogComponent,
    PlanetDetailComponent,
    PlanetListComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
