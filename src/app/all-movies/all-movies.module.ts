import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CharLimitPipe } from './pipes/chart-limit.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';




@NgModule({
  declarations: [
    MovieCardComponent,
    MovieHomeComponent,
    MovieDetailsComponent,
    FavMoviesComponent,
    SearchComponent,
    RecommendationComponent,
    CharLimitPipe,

  ],
  providers:[NgbRatingConfig],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    NgbPaginationModule,
    NgbRatingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      unitsFontSize: '3',
      backgroundColor: "black",
      subtitle: "''",
      unitsFontWeight: "'50'",
    })
  ],
  exports: [
    MovieCardComponent,
    MovieDetailsComponent,
    MovieHomeComponent,
    FavMoviesComponent,
    SearchComponent,
    RecommendationComponent
  ]
})
export class AllMoviesModule { }
