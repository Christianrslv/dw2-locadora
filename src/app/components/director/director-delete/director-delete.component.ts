import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DirectorService} from '../director.service';

@Component({
  selector: 'app-director-delete',
  templateUrl: './director-delete.component.html',
  styleUrls: ['./director-delete.component.css']
})
export class DirectorDeleteComponent {

  constructor(private directorService: DirectorService,
              public dialogRef: MatDialogRef<DirectorDeleteComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }
}
