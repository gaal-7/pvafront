import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JustificationService, Justification } from     '../../services/justification.service';

@Component({
  selector: 'app-justification-create',
  templateUrl: './justification-create.component.html',
  styleUrls: ['./justification-create.component.scss']
})
export class JustificationCreateComponent {
  justification: Partial<Justification> = {
    userId: 0,
    reason: '',
    date: ''
  };
  submitting = false;

  constructor(
    private justificationService: JustificationService,
    private router: Router
  ) { }

  submit() {
    if (!this.justification.userId || !this.justification.reason || !this.justification.date) {
      alert('Completa todos los campos');
      return;
    }
    this.submitting = true;
    this.justificationService.createJustification(this.justification as Justification).subscribe({
      next: () => {
        this.submitting = false;
        alert('Justificación creada');
        this.router.navigate(['/justification']);
      },
      error: () => {
        this.submitting = false;
        alert('Error al crear la justificación');
      }
    });
  }
}
