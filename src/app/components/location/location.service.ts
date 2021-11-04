import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Title} from '../title/title.model';
import {Observable} from 'rxjs';
import {LocationModel} from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = 'http://localhost:3801/location';

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

  create(location: LocationModel): Observable<LocationModel> {
    return this.http.post<LocationModel>(this.baseUrl, location);
  }

  read(): Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>(this.baseUrl);
  }

  readById(id: string): Observable<LocationModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<LocationModel>(url);
  }

  update(location: LocationModel): Observable<LocationModel> {
    const url = `${this.baseUrl}/${location.id}`;
    return this.http.put<LocationModel>(url, location);
  }

  delete(id: string): Observable<LocationModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<LocationModel>(url);
  }
}
