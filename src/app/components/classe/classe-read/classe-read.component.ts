import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {Classe} from '../classe.model';
import {ClasseDataSource} from './classe-read-datasource';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ClasseService} from '../classe.service';
import {ClasseDeleteComponent} from '../classe-delete/classe-delete.component';

@Component({
  selector: 'app-classe-read',
  templateUrl: './classe-read.component.html',
  styleUrls: ['./classe-read.component.css']
})
export class ClasseReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Classe>;
  dataSource: ClasseDataSource;
  classes: Classe[];
  displayedColumns = ['name', 'value', 'returnDate', 'action'];

  constructor(private classeService: ClasseService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.classeService.read().subscribe(classes => {
      this.classes = classes;
      this.afterLoadClasses();
    });
  }

  afterLoadClasses(): void {
    this.dataSource = new ClasseDataSource(this.classes);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteClasse(id: string): void {
    const dialogRef = this.dialog.open(ClasseDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.classeService.delete(id).subscribe(() => {
          this.classeService.showMessage('Classe removida com sucesso!');
        });
      }
    });
  }
}
