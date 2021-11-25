import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {Customer} from '../customer.model';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerDataSource} from './customer-read-datasource';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Customer>;
  dataSource: CustomerDataSource;
  customers: Customer[];
  displayedColumns = ['name', 'numInscricao', 'dtNascimento', 'sexo', 'cpf', 'tel', 'action'];

  constructor(private customerService: CustomerService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.read().subscribe(customers => {
      this.customers = customers;
      this.afterLoadCustomers();
    });
  }

  afterLoadCustomers(): void {
    this.dataSource = new CustomerDataSource(this.customers);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteCustomer(id: string): void {
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.delete(id).subscribe(() => {
          this.customerService.showMessage('Cliente removido com sucesso!');
        });
      }
    });
  }
}
