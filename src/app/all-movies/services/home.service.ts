import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  ayHaga!: any

  constructor(private http: HttpClient) {
    this.ayHaga = new BehaviorSubject({})
  }

  getPopularMonies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0NyLxRd7CsJUETmb0bfKibGO5Sy0JNx8HNLu9miaEPxNhokJgF7MtyAg4`)
  }
  getMoviesPagination(page: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0NyLxRd7CsJUETmb0bfKibGO5Sy0JNx8HNLu9miaEPxNhokJgF7MtyAg4&page=${page}`)
  }
  getOneMovie(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0NyLxRd7CsJUETmb0bfKibGO5Sy0JNx8HNLu9miaEPxNhokJgF7MtyAg4`)
  }
  getRecommendations(id: number ,page:number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0NyLxRd7CsJUETmb0bfKibGO5Sy0JNx8HNLu9miaEPxNhokJgF7MtyAg4&page=${page}`)
  }
  searchMovies(searchVal: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0NyLxRd7CsJUETmb0bfKibGO5Sy0JNx8HNLu9miaEPxNhokJgF7MtyAg4&query=${searchVal}`)
  }
  serchMoviePaginatio(searchVal: string, page: number) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0NyLxRd7CsJUETmb0bfKibGO5Sy0JNx8HNLu9miaEPxNhokJgF7MtyAg4&page=${page}&query=${searchVal}`)
  }
  getAyHaga() {
    return this.ayHaga.asObservable()
  }
  setAyHaga(id: any) {
    this.ayHaga.next(id)

  }
}
