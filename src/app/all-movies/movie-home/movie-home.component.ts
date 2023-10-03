import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../interface/movie';
import { HomeService } from '../services/home.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit, OnDestroy {
  allMovies!: Movie
  sub: Subscription = new Subscription()
  currentPage: number=1
  searchVal!: string
  constructor(private _HomeService: HomeService, private router: Router) { }
  ngOnInit() {
    this.sub = this._HomeService.getPopularMonies().subscribe({
      next: (data: any) => this.allMovies = data,
      error: (error) => console.log(error)
    })
  }
  getMoviesPagination(page: number) {
    this.sub = this._HomeService.getMoviesPagination(page).subscribe({
      next: (data: any) => this.allMovies = data,
      error: (error) => console.log(error)
    })
    this.currentPage = page
  }
  searchMovie() {
    this.router.navigate(["search", this.searchVal])
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
