import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GetGenreService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genre: string = '';

  /*constructor(public fetchApiData: GetGenreService, public dialofRef: MatDialogRef<GenreComponent>) { }*/
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: {
    name: string;
    description: string;
  }) { }

  ngOnInit(): void {

  }
}
