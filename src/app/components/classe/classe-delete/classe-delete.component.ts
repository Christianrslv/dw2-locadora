import {Component} from '@angular/core';
import {ClasseService} from '../classe.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-classe-delete',
  templateUrl: './classe-delete.component.html',
  styleUrls: ['./classe-delete.component.css']
})
export class ClasseDeleteComponent {

  constructor(private classeService: ClasseService,
              public dialogRef: MatDialogRef<ClasseDeleteComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }
}
