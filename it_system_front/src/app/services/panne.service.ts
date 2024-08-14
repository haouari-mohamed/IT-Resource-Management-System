
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  private apiUrl = 'http://localhost:8080/api/pannes';

  constructor(private http: HttpClient) { }


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }


  creerPanne(panne: any): Observable<any> {
    return this.http.post(this.apiUrl, panne , { headers: this.getHeaders() });
  }

  getAllPannes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getPanneById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  updatePanne(id: number, panne: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, panne, { headers: this.getHeaders() });
  }

  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`,{ headers: this.getHeaders() });
  }
}