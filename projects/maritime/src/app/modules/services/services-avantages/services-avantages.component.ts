import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-services-avantages',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeSlide],
  templateUrl: './services-avantages.component.html',
  styleUrls: ['./services-avantages.component.scss']
})
export class ServicesAvantagesComponent {
  avantages = [
    {
      icon: '💼',
      title: 'Expertise locale',
      description: 'Une parfaite connaissance des ports et des réglementations locales.'
    },
    {
      icon: '⏱️',
      title: 'Réactivité 24/7',
      description: 'Nos équipes sont mobilisées en permanence pour répondre aux urgences.'
    },
    {
      icon: '🤝',
      title: 'Fiabilité & confiance',
      description: 'Plusieurs armateurs internationaux nous font déjà confiance.'
    },
    {
      icon: '🌐',
      title: 'Réseau international',
      description: 'Partenaires logistiques dans les grands hubs maritimes.'
    }
  ];
}
