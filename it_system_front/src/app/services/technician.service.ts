
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private apiUrl = 'http://localhost:8080/api';
  
  constructor(private http: HttpClient) { }


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }


/*   getAssignedTickets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickets/assign`, { headers: this.getHeaders() });
  } */

  updateTicketStatus(ticketId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/tickets/${ticketId}/status`, { status }, { headers: this.getHeaders() });
  }

  getTicketDetails(ticketId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickets/${ticketId}`, { headers: this.getHeaders() });
  }
}