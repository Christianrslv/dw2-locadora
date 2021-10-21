import { Observable } from 'rxjs';
import { Actor } from './actor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  baseUrl = "http://localhost:3801/actor";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    showMessage(msg: string): void {
      this.snackBar.open(msg, 'x', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(actor: Actor): Observable<Actor> {
      return this.http.post<Actor>(this.baseUrl, actor);
    }

    read(): Observable<Actor[]> {
      return this.http.get<Actor[]>(this.baseUrl);
    }

    readById(id: string): Observable<Actor> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Actor>(url);
    }

    update(actor: Actor): Observable<Actor> {
      const url = `${this.baseUrl}/${actor.id}`;
      return this.http.put<Actor>(url, actor);
    }

    delete(id: string): Observable<Actor> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Actor>(url);
    }
}
