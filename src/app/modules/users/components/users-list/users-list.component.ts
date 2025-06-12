// src/app/modules/users/components/users-list/users-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: data => {
        this.users = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Error al cargar usuarios';
        this.loading = false;
      }
    });
  }
}
