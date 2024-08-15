import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketDeSupport } from '../model/global.model';

@Injectable({
  providedIn: 'root'
})
export class TicketDeSupportService {
  private apiUrl = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  creerTicketDeSupport(ticket: any): Observable<any> {
    return this.http.post(this.apiUrl, ticket, { headers: this.getHeaders() });
  }

  getAllTicketsDeSupport(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getTicketDeSupportById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  assignToTechnician(ticketId: number, technicianId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${ticketId}/assign?technicianId=${technicianId}`, {}, { headers: this.getHeaders() });
  }

  deleteTicketDeSupport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
  updateTicket(id: number, ticket: TicketDeSupport): Observable<TicketDeSupport> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<TicketDeSupport>(url, ticket, { headers: this.getHeaders() });
  }

  
}
