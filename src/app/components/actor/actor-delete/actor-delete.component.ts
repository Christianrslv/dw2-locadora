import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ActorService} from '../actor.service';

@Component({
  selector: 'app-actor-delete',
  templateUrl: './actor-delete.component.html',
  styleUrls: ['./actor-delete.component.css']
})
export class ActorDeleteComponent{

  constructor(private actorService: ActorService,
              public dialogRef: MatDialogRef<ActorDeleteComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }
}
