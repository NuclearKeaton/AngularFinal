import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
}

)
export class MovieService{
  constructor(private http: HttpClient){}

  movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2f3ac78d6bc4a219720283f8cc79bdca&language=en-US&page=1';
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl)
  }
}
