
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

/* 
  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/stats`, { headers: this.getHeaders() });
  } */

  getEquipmentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/equipements`, { headers: this.getHeaders() });
  }

  getTicketList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickets, { headers: this.getHeaders() }`);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateurs`, { headers: this.getHeaders() });
  }

  getNotificationList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications`, { headers: this.getHeaders() });
  }

  getBreakdownList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pannes`,  { headers: this.getHeaders() });
  }
}