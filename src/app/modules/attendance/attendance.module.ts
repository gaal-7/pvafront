import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceListComponent } from './components/attendance-list/attendance-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AttendanceListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule {}
