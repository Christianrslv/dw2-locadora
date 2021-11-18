import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Director} from './director.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  baseUrl = 'http://localhost:8080/diretor';

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

  create(director: Director): Observable<Director> {
    return this.http.post<Director>(this.baseUrl, director);
  }

  read(): Observable<Director[]> {
    return this.http.get<Director[]>(this.baseUrl);
  }

  readById(id: string): Observable<Director> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Director>(url);
  }

  update(director: Director): Observable<Director> {
    const url = `${this.baseUrl}/${director.id}`;
    return this.http.put<Director>(url, director);
  }

  delete(id: string): Observable<Director> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Director>(url);
  }
}
