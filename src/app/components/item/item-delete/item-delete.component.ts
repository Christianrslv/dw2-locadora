import { Component, OnInit } from '@angular/core';
import {DirectorService} from '../../director/director.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.css']
})
export class ItemDeleteComponent {

  constructor(private itemService: ItemService,
              public dialogRef: MatDialogRef<ItemDeleteComponent>) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }
}
