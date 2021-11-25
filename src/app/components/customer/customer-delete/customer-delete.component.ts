import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent {

  constructor(private customerService: CustomerService,
              public dialogRef: MatDialogRef<CustomerDeleteComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(): void {
    this.dialogRef.close(true);
  }
}
