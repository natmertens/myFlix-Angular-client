import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  /**
   * 
   * @param snackBar 
   * @param router 
   */
  constructor(public snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit(): void {
  }

  seeMovies(): void {
    this.router.navigate(['movies']);
  }

  seeProfile(): void {
    this.router.navigate(['user-profile']);
  }

  /**
   * log out user
   */
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
    this.snackBar.open('Great!', 'You’re logged out', {
      duration: 2000
    });
  }

}
