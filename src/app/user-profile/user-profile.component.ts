import { Component, OnInit, Input } from '@angular/core';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { GetUserService } from '../fetch-api-data.service';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { DeleteFavoriteMovieService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  movies: any[] = [];
  favorites: any[] = [];
  /*@Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };*/
  constructor(public fetchUserData: GetUserService, public fetchMovieData: GetAllMoviesService, public deleteFavoriteData: DeleteFavoriteMovieService, public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUser();
    this.getMovies();
  }

  getUser(): void {
    this.fetchUserData.getUser().subscribe((resp: any) => {
      this.user = resp;
      /*this.favorites = resp.FavoriteMovies;*/
      console.log(this.user);
      /*console.log(this.favorites);*/
      return this.user;
    });
  }

  getMovies(): void {
    this.fetchMovieData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      this.favorites = this.movies.filter((movie: any) => {
        return (this.user.FavoriteMovies.indexOf(movie._id) !== -1);
      });
      console.log(this.favorites);
    });
  }

  deleteFavorite(id: string): void {
    this.deleteFavoriteData.deleteFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open('Movie was removed from your favorites!', 'OK', {
        duration: 2000
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    });
  }

  openUpdateUserDialog(): void {
    this.dialog.open(UpdateProfileComponent, {
      width: '280px'
    });
  }
}
