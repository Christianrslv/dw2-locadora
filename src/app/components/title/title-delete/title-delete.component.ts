import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {TitleService} from '../title.service';

@Component({
  selector: 'app-title-delete',
  templateUrl: './title-delete.component.html',
  styleUrls: ['./title-delete.component.css']
})
export class TitleDeleteComponent {

  constructor(private titleService: TitleService,
              public dialogRef: MatDialogRef<TitleDeleteComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }
}
