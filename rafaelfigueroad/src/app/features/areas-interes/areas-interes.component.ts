import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-areas-interes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './areas-interes.component.html',
  styleUrl: './areas-interes.component.css',
})
export class AreasInteresComponent {
  modalActivo: string | null = null;

  abrirModal(area: string) {
    this.modalActivo = area;
  }

  cerrarModal() {
    this.modalActivo = null;
  }
}
