import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-temoignages-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoignages-clients.component.html',
  styleUrls: ['./temoignages-clients.component.scss'],
  animations: [fadeSlide]
})
export class TemoignagesClientsComponent {
  testimonials = [
    {
      name: 'Jean D.',
      company: 'LogiPort SARL',
      comment: 'Service rapide et professionnel. Notre cargaison est toujours bien gérée.',
    },
    {
      name: 'Fatou N.',
      company: 'TransGlobal Afrique',
      comment: 'Une équipe fiable et une assistance client très réactive.',
    },
    {
      name: 'Omar T.',
      company: 'Navisupply',
      comment: 'Nous faisons confiance à Marials pour tous nos besoins en shipchandling.',
    }
  ];
}
