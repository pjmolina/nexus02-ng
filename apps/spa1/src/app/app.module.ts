import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DialogComponent } from './dialog/dialog.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';

@NgModule({
  declarations: [AppComponent, TemperaturaComponent, DialogComponent],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
