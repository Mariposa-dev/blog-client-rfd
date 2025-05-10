import { Component } from '@angular/core';
import { PublicacionCardComponent } from '../../features/publication-card/publication-card.component';
import { CommonModule } from '@angular/common';

interface Publicacion {
  titulo: string;
  comentarios: number;
}

@Component({
  selector: 'app-publication-view-page',
  standalone: true,
  imports: [CommonModule,PublicacionCardComponent],
  templateUrl: './publication-view-page.component.html',
  styleUrl: './publication-view-page.component.css'
})
export class PublicationViewPageComponent {
  paginaActual = 1;
  publicacionesPorPagina = 5;
  totalResultados = 25;

  todasLasPublicaciones: Publicacion[] = Array(20).fill({
    titulo: 'Estudio realizado en clase el 14 de marzo del 2024',
    comentarios: 5
  });

  get publicaciones() {
    const start = (this.paginaActual - 1) * this.publicacionesPorPagina;
    return this.todasLasPublicaciones.slice(start, start + this.publicacionesPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.totalResultados / this.publicacionesPorPagina);
  }

  get totalPaginasArray() {
    return Array(this.totalPaginas).fill(0).map((_, i) => i + 1);
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  paginaAnterior() {
    if (this.paginaActual > 1) this.paginaActual--;
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) this.paginaActual++;
  }

}
