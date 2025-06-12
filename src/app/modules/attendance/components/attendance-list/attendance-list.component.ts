import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../../core/services/attendance.service';

interface AttendanceRecord {
  id: number;
  studentName: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss'],
})
export class AttendanceListComponent implements OnInit {
  attendanceRecords: AttendanceRecord[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.attendanceService.getAll().subscribe({
      next: (data) => (this.attendanceRecords = data.map((item: any) => ({
        id: item.id,
        studentName: item.studentName ?? item.student?.name ?? '',
        date: item.date,
        status: item.status,
      }))),
      error: (err) => console.error('Error loading attendance:', err),
    });
  }
}
