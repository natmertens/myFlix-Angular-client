import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  /**
   * 
   * @param data 
   */
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
