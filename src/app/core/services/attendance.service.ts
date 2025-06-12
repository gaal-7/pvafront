import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Attendance {
  id: number;
  userId: number;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:3000/attendance';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.apiUrl);
  }

  getById(id: number): Observable<Attendance> {
    return this.http.get<Attendance>(`${this.apiUrl}/${id}`);
  }

  create(attendance: Partial<Attendance>): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance);
  }

  update(id: number, attendance: Partial<Attendance>): Observable<Attendance> {
    return this.http.put<Attendance>(`${this.apiUrl}/${id}`, attendance);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
