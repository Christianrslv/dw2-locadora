import {Router} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ProductRead2DataSource, ProductRead2Item} from './product-read2-datasource';
import {ProductService} from './../product.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductRead2Item>;
  dataSource: ProductRead2DataSource;
  products: ProductRead2Item[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'price', 'action'];

  constructor(private productService: ProductService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void{
    // this.productService.read().subscribe(products => {
    //   this.products = products;
    //   this.afterLoadProducts();
    // });
  }

  afterLoadProducts(): void {
    this.dataSource = new ProductRead2DataSource();
    console.log(this.dataSource.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteProduct(id: string): void {
    const dialogRef = this.dialog.open(DialogConfirmationDelete, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.delete(id).subscribe(() => {
          this.productService.showMessage('Product Delete!');
        });
      }
    });
  }
}


//Component for dialog confirmation exclusion
@Component({
  selector: 'dialog-confirmation-delete.html',
  templateUrl: 'dialog-confirmation-delete.html',
  styles: ['button{ margin-left: 10px;  }']
})
export class DialogConfirmationDelete {

  constructor(private productService: ProductService,
    public dialogRef: MatDialogRef<DialogConfirmationDelete>
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleteProduct() {
    this.dialogRef.close(true);
  }

}
