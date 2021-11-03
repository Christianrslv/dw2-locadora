import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';
import {Item} from '../item.model';

export class ItemDatasource extends DataSource<Item> {
  data: Item[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(items: Item[]) {
    super();
    this.data = items;
  }

  connect(): Observable<Item[]> {
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
  private getPagedData(data: Item[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  // tslint:disable-next-line:typedef
  private getSortedData(data: Item[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'numSerie':
          return compare(+a.numSerie, +b.numSerie, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'dtAcquisition':
          return compare(a.dtAcquisition, b.dtAcquisition, isAsc);
        case 'typeItem':
          return compare(a.typeItem, b.typeItem, isAsc);
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
