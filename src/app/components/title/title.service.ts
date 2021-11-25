import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../actor/actor.model';
import {Observable} from 'rxjs';
import {Title} from './title.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  baseUrl = environment.url + 'titulo';

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

  create(title: Title): Observable<Title> {
    return this.http.post<Title>(this.baseUrl, title);
  }

  read(): Observable<Title[]> {
    return this.http.get<Title[]>(this.baseUrl);
  }

  readById(id: string): Observable<Title> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Title>(url);
  }

  update(title: Title): Observable<Title> {
    const url = `${this.baseUrl}/${title.id}`;
    return this.http.put<Title>(url, title);
  }

  delete(id: string): Observable<Title> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Title>(url);
  }
}
