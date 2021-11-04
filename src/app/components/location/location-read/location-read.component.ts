import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {LocationModel} from '../location.model';
import {LocationDataSource} from './location-read-datasource';
import {LocationService} from '../location.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {LocationDeleteComponent} from '../location-delete/location-delete.component';

@Component({
  selector: 'app-location-read',
  templateUrl: './location-read.component.html',
  styleUrls: ['./location-read.component.css']
})
export class LocationReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<LocationModel>;
  dataSource: LocationDataSource;
  locations: LocationModel[];
  displayedColumns = ['dtLocacao', 'dtDevolucaoPrevista', 'dtDevolucaoEfetiva', 'valorCobrado', 'multaCobrada', 'item', 'customer'];

  constructor(private locationService: LocationService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.locationService.read().subscribe(locations => {
      this.locations = locations;
      this.afterLoadLocations();
    });
  }

  afterLoadLocations(): void {
    this.dataSource = new LocationDataSource(this.locations);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteLocation(id: string): void {
    const dialogRef = this.dialog.open(LocationDeleteComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.locationService.delete(id).subscribe(() => {
          this.locationService.showMessage('Locação removido com sucesso!');
        });
      }
    });
  }
}
