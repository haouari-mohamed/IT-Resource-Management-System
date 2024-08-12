
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/stats`);
  }

  getEquipmentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/equipements`);
  }

  getTicketList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickets`);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateurs`);
  }

  getNotificationList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications`);
  }

  getBreakdownList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pannes`);
  }
}