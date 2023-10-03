import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { searchMovies } from '../interface/searchMovies';
import { Subscription } from 'rxjs';
import { OriginalMovie } from '../interface/originalMovie';
import { FavService } from '../services/fav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchVal: string = ""
  searchResult!: searchMovies
  faHeart = faHeart
  imagePass: string = 'https://image.tmdb.org/t/p/w500'
  pagesNum: number[] = []
  currentPage: number=1
  allPages!: number
  sub: Subscription = new Subscription()
  watchList: { movie: OriginalMovie, added: boolean }[] = []
  constructor(private active: ActivatedRoute, private _FavService: FavService, private _HomeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.searchVal = this.active.snapshot.params["searchVal"]
    this._HomeService.searchMovies(this.searchVal).subscribe({ next: (movie: any) => this.searchResult = movie })
    this.sub = this._HomeService.serchMoviePaginatio(this.searchVal, 1).subscribe({
      next: (data: any) => {
        this.searchResult = data;
        this.allPages = data.total_pages
      },
      error: (error) => console.log(error)
    });
  }
  addToWatchList(movie: OriginalMovie) {
    this._FavService.addToWatchList(movie)
    this.watchList = this._FavService.getWatchList()
  }
  redirectToDetails(id: Number) {
    this.router.navigate(["movieDetails", id])
    this._HomeService.setAyHaga(id)
  }
  searchMovie() {
    this._HomeService.searchMovies(this.searchVal).subscribe({ next: (movie: any) => this.searchResult = movie })
    this.getMoviesPagination(this.searchVal,this.currentPage)
  }
  getMoviesPagination(searchVal: string, page: number) {
    this.sub = this._HomeService.serchMoviePaginatio(searchVal, this.currentPage).subscribe({
      next: (data: any) => {
        this.searchResult = data;
        this.allPages = data.total_pages
      },
      error: (error) => console.log(error)
    });
    this.currentPage=page
  }
  isMovieInWatchList(movie: any): boolean {
    const isInWatchList = this.watchList.some((item: any) => item.movie.id === movie.id);
    return isInWatchList;
  }
}