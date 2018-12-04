import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FooterComponent } from './components/shared/footer/footer.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

import { guards } from './guards';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
