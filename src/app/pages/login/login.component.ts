import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('accessToken', res.accessToken);
        this.error = '';
        // Redirigir a Home o Dashboard
      },
      error: () => {
        this.error = 'Usuario o contraseña incorrectos';
      },
    });
  }
  ngOnInit() {
  console.log('LoginComponent cargado');
}
}
