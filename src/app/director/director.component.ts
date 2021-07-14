import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GetDirectorService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss'],
  /*encapsulation: ViewEncapsulation.None*/
})
export class DirectorComponent implements OnInit {

  /*constructor(public fetchApiData: GetDirectorService, public dialofRef: MatDialogRef<DirectorComponent>) { }*/
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: {
    name: string;
    bio: string;
    birth: Date;
    death: Date;
  }) { }

  ngOnInit(): void {
  }

}
