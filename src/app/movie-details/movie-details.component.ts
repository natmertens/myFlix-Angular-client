import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  /**
   * 
   * @param data 
   */
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: {
    title: string;
    imagePath: string;
    description: string;
    director: string;
    genre: string;
  }) { }

  ngOnInit(): void {
  }

}
