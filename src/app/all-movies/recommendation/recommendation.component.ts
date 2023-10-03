import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieDetails } from '../interface/movie-details';
import { FavService } from '../services/fav.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { searchMovies } from '../interface/searchMovies';
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnChanges, OnDestroy, OnInit {
  faHeart = faHeart
  faStar = faStar
  imagePass: string = 'https://image.tmdb.org/t/p/w500'
  @Input() id!: number
  recommendations!: searchMovies
  movie!: MovieDetails
  sub: Subscription = new Subscription()
  watchList: { movie: any, added: boolean }[] = []
  allPages!: number;
  currentPage: number = 1

  constructor(config: NgbRatingConfig, private _HomeService: HomeService, private _FavService: FavService, private activeRoute: ActivatedRoute, private router: Router) {
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
    this.watchList = this._FavService.getWatchList()
  }
  redirectToDetails(id: number) {
    this.router.navigate(["movieDetails", this.id])
    this._HomeService.setAyHaga(id)
    // this.getMoviesPagination(this.id, this.currentPage)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.sub = this._HomeService.getOneMovie(this.id).subscribe({ next: (movie: MovieDetails) => this.movie = movie })
    this.sub = this._HomeService.getRecommendations(this.id, this.currentPage).subscribe({ next: (movie: any) => this.recommendations = movie })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  addToWatchList(movie: any) {
    this._FavService.addToWatchList(movie)
    this.watchList = this._FavService.getWatchList()
    console.log(this.watchList)
  }
  isMovieInWatchList(movie: any): boolean {
    const isInWatchList = this.watchList.some((item: any) => item.movie.id === movie.id);
    return isInWatchList;
  }
  // getMoviesPagination(id: number, page: number) {
  //   this.sub = this._HomeService.getRecommendations(this.id, this.currentPage).subscribe({
  //     next: (data: any) => {
  //       this.recommendations = data;
  //       this.allPages = data.total_pages;
  //       console.log(this.allPages)
  //     },
  //     error: (error) => console.log(error)
  //   });
  //   this.currentPage = page
  // }
}
