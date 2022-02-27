import { Component, OnInit } from '@angular/core';
import { ChRouteService } from 'src/service/ch-route.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-loadselect',
  templateUrl: './loadselect.component.html',
  styleUrls: ['./loadselect.component.scss']
})
export class LoadselectComponent implements OnInit {

  constructor(public rout: ChRouteService, public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  activeZone: number[];
  ngOnInit(): void {
    let items = [];
      for (let i = 1; i < 251; i++) {
        
          items.push(i);
        
      }
      this.activeZone = items;

    
  }
  
  

  clicked()

  {
    this.rout.active = 3;
  }

}
