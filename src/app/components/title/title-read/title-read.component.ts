import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {Title} from '../title.model';
import {TitleDataSource} from './title-read-datasource';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {TitleService} from '../title.service';
import {TitleDeleteComponent} from '../title-delete/title-delete.component';

@Component({
  selector: 'app-title-read',
  templateUrl: './title-read.component.html',
  styleUrls: ['./title-read.component.css']
})
export class TitleReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Title>;
  dataSource: TitleDataSource;
  titles: Title[];
  displayedColumns = ['name', 'year', 'synopsis', 'category', 'actor', 'director', 'classe', 'action'];

  constructor(private titleService: TitleService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.read().subscribe(titles => {
      this.titles = titles;
      this.afterLoadTitles();
    });
  }

  afterLoadTitles(): void {
    this.dataSource = new TitleDataSource(this.titles);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteTitle(id: string): void {
    const dialogRef = this.dialog.open(TitleDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.titleService.delete(id).subscribe(() => {
          this.titleService.showMessage('Título removido com sucesso!');
        });
      }
    });
  }
}
