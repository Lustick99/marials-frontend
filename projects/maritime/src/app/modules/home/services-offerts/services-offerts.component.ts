import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, fadeSlide, staggeredList } from '../../../shared/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-offerts',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './services-offerts.component.html',
  styleUrls: ['./services-offerts.component.scss'],
  animations: [fadeSlide, staggeredList, fadeIn]
})
export class ServicesOffertsComponent {
  services = [
    {
      icon: 'assets/images/approvisionnement.jpg',
      title: 'Approvisionnement Naval',
      description: 'Livraison rapide de provisions, pièces détachées, carburant et plus encore directement à quai.'
    },
    {
      icon: 'assets/images/services.jpg',
      title: 'Services Portuaires',
      description: 'Assistance à l’accostage, formalités portuaires, coordination avec les autorités locales.'
    },
    {
      icon: 'assets/images/logistique.jpg',
      title: 'Logistique Maritime',
      description: 'Organisation du transport, entreposage temporaire, et suivi des expéditions.'
    },
    {
      icon: 'assets/images/support-technique.jpg',
      title: 'Support Technique',
      description: 'Maintenance, inspection, réparation, coordination avec techniciens spécialisés.'
    }
  ];

}
