// src/app/modules/users/users.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ]
})
export class UsersModule {}
