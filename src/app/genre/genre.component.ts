import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genre: string = '';

  /**
   * 
   * @param data 
   */
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: {
    name: string;
    description: string;
  }) { }

  ngOnInit(): void {
  }
}
