import { Component, OnInit } from '@angular/core';
import { OriginalMovie } from '../interface/originalMovie';
import { FavService } from '../services/fav.service';
import { faHeartCrack ,faHeart } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';
import { NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {
  watchList: { movie: OriginalMovie, added: boolean }[] = []
  faHeartCrack = faHeartCrack
  faHeart=faHeart
  imagePass: string = 'https://image.tmdb.org/t/p/w500'

  constructor(config: NgbRatingConfig, private _FavService: FavService ,private _HomeService:HomeService ,private router:Router) { 
    config.max = 5;
		config.readonly = true;
  }
  ngOnInit(): void {
    this.watchList = this._FavService.getWatchList()
  }
  removeMovie(movie: OriginalMovie) {
    this._FavService.removeFromList(movie);
    this.watchList = this._FavService.getWatchList()
  }
  redirectToDetails(id: number) {
    this.router.navigate(["movieDetails", id])
    this._HomeService.setAyHaga(id)
  }
}
