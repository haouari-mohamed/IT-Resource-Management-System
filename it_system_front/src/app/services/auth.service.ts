// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  saveToken(token: any) {
    localStorage.setItem('token',token)
  }


  saveRole(role: string) {
    localStorage.setItem('role', role);
  }

  private apiUrl = 'http://localhost:8080/auth'; 

  constructor(private http: HttpClient) { } 

  login(username: string, password: string): Observable<any> {

    return this.http.post(this.apiUrl, { username, password });
  }
}
