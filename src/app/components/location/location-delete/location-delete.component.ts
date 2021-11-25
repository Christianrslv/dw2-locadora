import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-location-delete',
  templateUrl: './location-delete.component.html',
  styleUrls: ['./location-delete.component.css']
})
export class LocationDeleteComponent {

  constructor(private locationService: LocationService,
              public dialogRef: MatDialogRef<LocationDeleteComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }

}
