import { Component, OnInit } from '@angular/core';
import { Justification, JustificationService } from '../../services/justification.service';

@Component({
  selector: 'app-justification-list',
  templateUrl: './justification-list.component.html',
  styleUrls: ['./justification-list.component.scss']
})
export class JustificationListComponent implements OnInit {

  justifications: Justification[] = [];
  loading = true;

  constructor(private justificationService: JustificationService) { }

  ngOnInit(): void {
    this.loadJustifications();
  }

  loadJustifications(): void {
    this.loading = true;
    this.justificationService.getJustifications().subscribe({
      next: data => {
        this.justifications = data;
        this.loading = false;
      },
      error: () => {
        // manejar error
        this.loading = false;
      }
    });
  }
}
