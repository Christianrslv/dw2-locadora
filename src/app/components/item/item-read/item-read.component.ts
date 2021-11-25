import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {Item} from '../item.model';
import {ItemService} from '../item.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ItemDatasource} from './item-read-datasource';
import {ItemDeleteComponent} from '../item-delete/item-delete.component';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Item>;
  dataSource: ItemDatasource;
  items: Item[];
  displayedColumns = ['numSerie', 'dtAcquisition', 'typeItem', 'title', 'action'];

  constructor(private itemService: ItemService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.itemService.read().subscribe(items => {
      this.items = items;
      this.afterLoadItems();
    });
  }

  afterLoadItems(): void {
    this.dataSource = new ItemDatasource(this.items);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteItem(id: string): void {
    const dialogRef = this.dialog.open(ItemDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.itemService.delete(id).subscribe(() => {
          this.itemService.showMessage('Item removido com sucesso!');
        });
      }
    });
  }
}
