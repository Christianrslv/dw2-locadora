import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';
import {Classe} from '../classe.model';

export class ClasseDataSource extends DataSource<Classe> {
  data: Classe[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(classes: Classe[]) {
    super();
    this.data = classes;
  }

  connect(): Observable<Classe[]> {
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
  private getPagedData(data: Classe[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  // tslint:disable-next-line:typedef
  private getSortedData(data: Classe[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'value':
          return compare(+a.value, +b.value, isAsc);
        case 'returnDate':
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
