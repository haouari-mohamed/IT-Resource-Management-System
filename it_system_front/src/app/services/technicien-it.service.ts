
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicienITService {
  private apiUrl = 'http://localhost:8080/api/techniciens';
  private apiUrl2 = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

 /*  creerTechnicienIT(technicien: any): Observable<any> {
    return this.http.post(this.apiUrl, technicien , { headers: this.getHeaders() });
  } */

  getAllTechnicienITs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getTechnicienITById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

/*   updateTechnicienIT(id: number, technicien: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, technicien, { headers: this.getHeaders() });
  }

  deleteTechnicienIT(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  } */
  getAssignedTickets(technicianId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/technician/${technicianId}`, { headers: this.getHeaders() });
}

  updateTicketStatus(ticketId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl2}/tickets/${ticketId}/status`, { status }, { headers: this.getHeaders() });
  }

 /*  getTicketDetails(ticketId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickets/${ticketId}`, { headers: this.getHeaders() });
  } */
}