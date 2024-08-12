
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  private apiUrl = 'http://localhost:8080/api/pannes';

  constructor(private http: HttpClient) { }

  creerPanne(panne: any): Observable<any> {
    return this.http.post(this.apiUrl, panne);
  }

  getAllPannes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPanneById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePanne(id: number, panne: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, panne);
  }

  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}