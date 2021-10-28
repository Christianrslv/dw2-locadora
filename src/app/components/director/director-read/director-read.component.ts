import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ActorDataSource} from '../../actor/actor-read/actor-read-datasource';
import {Director} from '../director.model';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {DirectorService} from '../director.service';
import {DialogConfirmationDelete} from '../../product/product-read2/product-read2.component';
import {ActorDeleteComponent} from '../../actor/actor-delete/actor-delete.component';
import {DirectorDeleteComponent} from '../director-delete/director-delete.component';
import {DirectorDataSource} from './director-read-datasource';

@Component({
  selector: 'app-director-read',
  templateUrl: './director-read.component.html',
  styleUrls: ['./director-read.component.css']
})
export class DirectorReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Director>;
  dataSource: DirectorDataSource;
  directors: Director[];
  displayedColumns = ['name', 'action'];

  constructor(private directorService: DirectorService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.directorService.read().subscribe(directors => {
      this.directors = directors;
      this.afterLoadDirectors();
    });
  }

  afterLoadDirectors(): void {
    this.dataSource = new DirectorDataSource(this.directors);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteDirector(id: string): void {
    const dialogRef = this.dialog.open(DirectorDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.directorService.delete(id).subscribe(() => {
          this.directorService.showMessage('Diretor removido com sucesso!');
        });
      }
    });
  }
}
