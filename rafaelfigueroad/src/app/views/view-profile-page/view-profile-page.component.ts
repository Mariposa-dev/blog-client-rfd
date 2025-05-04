import { Component } from '@angular/core';
import { AreasInteresComponent } from '../../features/areas-interes/areas-interes.component';
import { CarruselImagesComponent } from '../../shared/carrusel-images/carrusel-images.component';

@Component({
  selector: 'app-view-profile-page',
  standalone: true,
  imports: [
    AreasInteresComponent,
    CarruselImagesComponent
  ],
  templateUrl: './view-profile-page.component.html',
  styleUrl: './view-profile-page.component.css'
})
export class ViewProfilePageComponent {

}
