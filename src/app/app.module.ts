import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SpinnerComponent } from 'src/utils/spinner/spinner.component';
import { HomeComponent } from 'src/views/home/home.component';
import { CardComponent } from 'src/utils/card/card.component';
import { SearchBarComponent } from 'src/utils/search-bar/search-bar.component';

import { routes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HomeComponent,
    CardComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
