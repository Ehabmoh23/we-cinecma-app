import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesModule } from './all-movies/all-movies.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllMoviesModule,
    SharedModule,
    AuthModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      backgroundColor:"black",
      unitsFontSize:"'3'",
      unitsFontWeight:"'50'"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
