import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';
import {Customer} from '../customer.model';

export class CustomerDataSource extends DataSource<Customer> {
  data: Customer[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(customers: Customer[]) {
    super();
    this.data = customers;
  }

  connect(): Observable<Customer[]> {
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
  private getPagedData(data: Customer[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  // tslint:disable-next-line:typedef
  private getSortedData(data: Customer[]) {
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
        case 'sexo':
          return compare(a.id, b.id, isAsc);
        case 'numInscricao':
          return compare(+a.id, +b.id, isAsc);
        case 'dtNascimento':
          return compare(a.id, b.id, isAsc);
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
