import { Component } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'movie-root',
  templateUrl: './movie.component.html',
})
export class MovieCardComponent{
  movieUrl : IMovie[] = [ ];
  filteredMovies: IMovie[];
  constructor (private movieService: MovieService)
  {
    this.movieService.getProducts().subscribe(movieObserved => {
      this.movies = movieObserved;
      this.filteredMovies = this.movies;
    })
  }
}
