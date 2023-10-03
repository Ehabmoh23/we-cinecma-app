import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { MovieDetailsComponent } from './all-movies/movie-details/movie-details.component';
import { MovieHomeComponent } from './all-movies/movie-home/movie-home.component';
import { FavMoviesComponent } from './all-movies/fav-movies/fav-movies.component';
import { SearchComponent } from './all-movies/search/search.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: MovieHomeComponent },
  { path: "movieDetails/:id", component: MovieDetailsComponent },
  { path: "search/:searchVal", component: SearchComponent },
  { path: "favMovies", component: FavMoviesComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
