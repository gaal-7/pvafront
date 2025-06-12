import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Justification {
  id?: number;
  userId: number;
  reason: string;
  date: string;
  status?: 'pending' | 'approved' | 'rejected';
}

@Injectable({
  providedIn: 'root'
})
export class JustificationService {

  private apiUrl = 'http://localhost:3000/justification';

  constructor(private http: HttpClient) { }

  getJustifications(): Observable<Justification[]> {
    return this.http.get<Justification[]>(this.apiUrl);
  }

  getJustificationById(id: number): Observable<Justification> {
    return this.http.get<Justification>(`${this.apiUrl}/${id}`);
  }

  createJustification(justification: Justification): Observable<Justification> {
    return this.http.post<Justification>(this.apiUrl, justification);
  }

  updateJustification(id: number, justification: Partial<Justification>): Observable<Justification> {
    return this.http.patch<Justification>(`${this.apiUrl}/${id}`, justification);
  }

  deleteJustification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
