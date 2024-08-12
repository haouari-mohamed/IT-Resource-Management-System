
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicienITService {
  private apiUrl = 'http://localhost:8080/api/techniciens';

  constructor(private http: HttpClient) { }

  creerTechnicienIT(technicien: any): Observable<any> {
    return this.http.post(this.apiUrl, technicien);
  }

  getAllTechnicienITs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTechnicienITById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateTechnicienIT(id: number, technicien: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, technicien);
  }

  deleteTechnicienIT(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}