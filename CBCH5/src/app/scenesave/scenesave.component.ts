import { Component, OnInit } from '@angular/core';
import { ChRouteService } from 'src/service/ch-route.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-scenesave',
  templateUrl: './scenesave.component.html',
  styleUrls: ['./scenesave.component.scss']
})
export class ScenesaveComponent implements OnInit {

  constructor(public rout: ChRouteService, public dialog: MatDialog,private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  clicked()

  {
    this.rout.active = 3;
  }


}
