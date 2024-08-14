import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs';

  constructor(private http: HttpClient) { }

  
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }


  creerUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.apiUrl, utilisateur,  { headers: this.getHeaders() });
    
  }

  getAllUtilisateurs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl,  { headers: this.getHeaders() });
  }
}