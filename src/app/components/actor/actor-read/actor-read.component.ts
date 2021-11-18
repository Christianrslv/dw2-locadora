import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {Actor} from '../actor.model';
import {ActorDataSource} from './actor-read-datasource';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ActorService} from '../actor.service';
import {ActorDeleteComponent} from '../actor-delete/actor-delete.component';

@Component({
  selector: 'app-actor-read',
  templateUrl: './actor-read.component.html',
  styleUrls: ['./actor-read.component.css']
})
export class ActorReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Actor>;
  dataSource: ActorDataSource;
  actors: Actor[];
  displayedColumns = ['name', 'action'];

  constructor(private actorService: ActorService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.actorService.read().subscribe(actors => {
      this.actors = actors;
      console.log(this.actors);
      this.afterLoadActors();
    });
  }

  afterLoadActors(): void {
    this.dataSource = new ActorDataSource(this.actors);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteActor(id: string): void {
    const dialogRef = this.dialog.open(ActorDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actorService.delete(id).subscribe(() => {
          this.actorService.showMessage('Ator removido com sucesso!');
        });
      }
    });
  }
}
