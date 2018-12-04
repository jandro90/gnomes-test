import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SpinnerComponent } from 'src/utils/spinner/spinner.component';
import { HomeComponent } from 'src/views/home/home.component';

import { routes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
