// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private currentUserId: number | null = null;
  
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
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  setCurrentUserId(id: number) {
    this.currentUserId = id;
    localStorage.setItem('currentUserId', id.toString());
  }

  getCurrentUserId(): number {
    if (this.currentUserId === null) {
      const storedId = localStorage.getItem('currentUserId');
      this.currentUserId = storedId ? parseInt(storedId, 10) : null;
    }
    return this.currentUserId as number;
  }

}
