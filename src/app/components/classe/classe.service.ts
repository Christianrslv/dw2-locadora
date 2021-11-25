import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Classe} from './classe.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  baseUrl = environment.url + 'classe';

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

  create(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(this.baseUrl, classe);
  }

  read(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.baseUrl);
  }

  readById(id: string): Observable<Classe> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Classe>(url);
  }

  update(classe: Classe): Observable<Classe> {
    const url = `${this.baseUrl}/${classe.id}`;
    return this.http.put<Classe>(url, classe);
  }

  delete(id: string): Observable<Classe> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Classe>(url);
  }
}
