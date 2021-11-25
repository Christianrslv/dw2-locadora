import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.url + 'cliente';

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

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer);
  }

  read(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  readById(id: string): Observable<Customer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  update(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer);
  }

  delete(id: string): Observable<Customer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Customer>(url);
  }
}
