import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { AddFavoriteMovieService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  /**
   * 
   * @param fetchMovieData 
   * @param addFavoriteData 
   * @param snackBar 
   * @param dialog 
   */
  constructor(public fetchMovieData: GetAllMoviesService, public addFavoriteData: AddFavoriteMovieService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * 
   * get all movies
   */
  getMovies(): void {
    this.fetchMovieData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      /*console.log(this.movies);*/
      return this.movies;
    });
  }

  /**
   * 
   * @param id 
   * add movie to favorites
   */
  addFavorite(id: string): any {
    this.addFavoriteData.addFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open('Great!', 'Movie was added to favorites!', {
        duration: 2000,
      });
    })
  }

  /**
   * open dialog with genre info
   * @param name 
   * @param description 
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: { name, description }
    });
  }

  /**
   * open dialog with director info
   * @param name 
   * @param bio 
   * @param birth 
   * @param death 
   */
  openDirectorDialog(name: string, bio: string, birth: string, death: string): void {
    this.dialog.open(DirectorComponent, {
      data: { name, bio, birth, death }
    });
  }

  /**
   * open dialog with synopsis info
   * @param title 
   * @param imagePath 
   * @param description 
   * @param director 
   * @param genre 
   */
  openDetailsDialog(title: string, imagePath: string, description: string, director: string, genre: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: { title, imagePath, description, director, genre }
    });
  }
}
