import {Injectable} from '@angular/core';
import {Title} from '../title/title.model';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Item} from './item.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.url + 'item';

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item);
  }

  read(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  readById(id: string): Observable<Item> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  update(item: Item): Observable<Item> {
    const url = `${this.baseUrl}/${item.id}`;
    return this.http.put<Item>(url, item);
  }

  delete(id: string): Observable<Item> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Item>(url);
  }
}
