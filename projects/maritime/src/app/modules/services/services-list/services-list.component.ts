import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { staggeredList } from '../../../shared/animations';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  animations: [staggeredList],
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {
  services = [
    {
      icon: '🚢',
      title: 'Approvisionnement de navires',
      description: 'Fourniture de vivres, pièces de rechange, matériels techniques, etc.'
    },
    {
      icon: '⚓',
      title: 'Assistance portuaire',
      description: 'Coordination des escales, formalités douanières, remorquage, etc.'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & réparations',
      description: 'Interventions sur place ou en cale sèche grâce à notre réseau de techniciens.'
    },
    {
      icon: '📦',
      title: 'Logistique & transit maritime',
      description: 'Gestion de vos flux logistiques, stockage temporaire et transport.'
    },
    {
      icon: '📑',
      title: 'Documentation & conformité',
      description: 'Préparation et vérification des documents exigés par les autorités.'
    },
    {
      icon: '🚗',
      title: 'Location de véhicules',
      description: 'Mise à disposition de voitures, camions et autres véhicules pour vos besoins.'
    },
    {
      icon: '🛳️',
      title: 'Transport maritime',
      description: 'Organisation de vos transports maritimes, y compris le fret et la logistique.'
    },
    {
      icon: '🛥️',
      title: 'Services de remorquage',
      description: 'Assistance pour le remorquage de navires dans les ports et les chenaux.'
    },
    {
      icon: '🧑‍✈️',
      title: 'Équipage & personnel maritime',
      description: 'Recrutement et mise à disposition d’équipages qualifiés pour vos navires.'
    }
  ];
}
