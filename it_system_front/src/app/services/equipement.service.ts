import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private apiUrl = 'http://localhost:8080/api/equipements';

  constructor(private http: HttpClient) { }

  creerEquipement(equipement: any): Observable<any> {
    return this.http.post(this.apiUrl, equipement);
  }

  getAllEquipements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEquipementById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateEquipement(id: number, equipement: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, equipement);
  }

  deleteEquipement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}