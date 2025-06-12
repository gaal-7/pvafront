import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  username = '';
  password = '';
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/auth/login', loginData).subscribe({
      next: (res) => {
        const token = res.access_token;
        const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload.role;

        // Guarda el token
        localStorage.setItem('token', token);

        // Redirige según el rol
        switch (role) {
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'docente':
            this.router.navigate(['/docente']);
            break;
          case 'alumno':
            this.router.navigate(['/alumno']);
            break;
          default:
            this.router.navigate(['/']);
            break;
        }
      },
      error: () => {
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
