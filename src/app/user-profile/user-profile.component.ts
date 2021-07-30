import { Component, OnInit, Input } from '@angular/core';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { GetUserService } from '../fetch-api-data.service';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { DeleteFavoriteMovieService } from '../fetch-api-data.service';
import { DeleteUserService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  movies: any[] = [];
  favorites: any[] = [];
  /**
   * 
   * @param fetchUserData 
   * @param fetchMovieData 
   * @param deleteFavoriteData 
   * @param deleteUserData 
   * @param dialog 
   * @param snackBar 
   * @param router 
   */
  constructor(public fetchUserData: GetUserService, public fetchMovieData: GetAllMoviesService, public deleteFavoriteData: DeleteFavoriteMovieService, public deleteUserData: DeleteUserService, public dialog: MatDialog,
    public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * get all data belonging to user
   */
  getUser(): void {
    this.fetchUserData.getUser().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      this.getMovies();
    });
  }

  /**
   * get all movies and filter for favorites
   */
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

  /**
   * delete favorite movie and reload profile page
   */
  deleteFavorite(id: string): void {
    this.deleteFavoriteData.deleteFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open('Great!', 'Movie was removed from your favorites', {
        duration: 2000
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    });
  }

  /**
   * delete user data and navigate back to welcome screen
   */
  deleteUser(): void {
    this.deleteUserData.deleteUser().subscribe((result) => {
      console.log(result);
      this.snackBar.open('Account successfully deleted!', 'OK', {
        duration: 2000
      });
      localStorage.clear();
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
      this.router.navigate(['/welcome']).then(() => {
        window.location.reload();
      });
    }
    );
  }

  /**
   * open dialog for updating user data
   */
  openUpdateUserDialog(): void {
    this.dialog.open(UpdateProfileComponent, {
      width: '280px'
    });
  }
}
