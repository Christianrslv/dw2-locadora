import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';
import {LocationModel} from '../location.model';

export class LocationDataSource extends DataSource<LocationModel> {
  data: LocationModel[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(locations: LocationModel[]) {
    super();
    this.data = locations;
  }

  connect(): Observable<LocationModel[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  // tslint:disable-next-line:typedef
  disconnect() {
  }

  // tslint:disable-next-line:typedef
  private getPagedData(data: LocationModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  // tslint:disable-next-line:typedef
  private getSortedData(data: LocationModel[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'dtLocacao':
          return compare(a.dtLocacao, b.dtLocacao, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'dtDevolucaoPrevista':
          return compare(a.dtDevolucaoPrevista, b.dtDevolucaoPrevista, isAsc);
        case 'dtDevolucaoEfetiva':
          return compare(a.dtDevolucaoEfetiva, b.dtDevolucaoEfetiva, isAsc);
        case 'valorCobrado':
          return compare(+a.valorCobrado, +b.valorCobrado, isAsc);
        case 'multaCobrada':
          return compare(+a.multaCobrada, +b.multaCobrada, isAsc);
        default:
          return 0;
      }
    });
  }
}

// tslint:disable-next-line:typedef
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
