import { Injectable } from '@angular/core';
import { OriginalMovie } from '../interface/originalMovie';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private watchList: { movie: OriginalMovie, added: boolean }[] = []
  constructor() { }
  addToWatchList(movie: OriginalMovie) {
    const movieExist = this.watchList.find((item) => item.movie.id === movie.id)
    if (!movieExist) {
      this.watchList.push({ movie: movie, added: true })
    }
    else {
      const index = this.watchList.findIndex((item) => item.movie.id === movie.id)
      this.watchList.splice(index, 1)
    }
  }
  getWatchList() {
    return this.watchList
  }
  removeFromList(movie: OriginalMovie) {
    const index = this.watchList.findIndex((item) => item.movie.id === movie.id)
    if (index!=-1) {
      this.watchList.splice(index, 1)
    }
  }
}
