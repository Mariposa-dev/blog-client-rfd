import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carrusel-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel-images.component.html',
  styleUrl: './carrusel-images.component.css'
})
export class CarruselImagesComponent implements OnInit, OnDestroy {

  imagenes = [
    'assets/Senderos-Mente.jpg',
    'assets/Senderos-Terror.jpg',
  ];

  currentIndex = 0;
  intervalo: any;

  ngOnInit() {
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  iniciarAutoplay() {
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 3000);
  }

  siguiente() {
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

  anterior() {
    this.currentIndex = (this.currentIndex - 1 + this.imagenes.length) % this.imagenes.length;
  }

  irASlide(index: number) {
    this.currentIndex = index;
  }

}
