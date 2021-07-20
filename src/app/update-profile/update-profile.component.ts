import { Component, OnInit, Input } from '@angular/core';
import { UpdateUserService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * 
   * @param updateUserData 
   * @param dialogRef 
   * @param snackBar 
   */
  constructor(public updateUserData: UpdateUserService, public dialogRef: MatDialogRef<UpdateProfileComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * update user
   */
  updateUser(): void {
    this.updateUserData.updateUser(this.userData).subscribe((result) => {
      this.dialogRef.close();
      console.log(result);
      localStorage.setItem('user', result.Username);
      this.snackBar.open('Profile was updated', 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}
