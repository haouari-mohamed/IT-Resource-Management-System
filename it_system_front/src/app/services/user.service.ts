import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs';

  constructor(private http: HttpClient) { }

  creerUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.apiUrl, utilisateur);
    
  }

  getAllUtilisateurs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}