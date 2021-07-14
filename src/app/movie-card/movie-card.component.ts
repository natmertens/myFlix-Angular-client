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

  constructor(public fetchMovieData: GetAllMoviesService, public addFavoriteData: AddFavoriteMovieService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchMovieData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  addFavorite(id: string): any {
    this.addFavoriteData.addFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open('Movie added to favorites!', 'OK', {
        duration: 2000,
      });
    })
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: { name, description }
    });
  }

  openDirectorDialog(name: string, bio: string, birth: string, death: string): void {
    this.dialog.open(DirectorComponent, {
      data: { name, bio, birth, death },
      width: '90%'
    });
  }

  openDetailsDialog(title: string, imagePath: string, description: string, director: string, genre: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: { title, imagePath, description, director, genre }
    });
  }

}
