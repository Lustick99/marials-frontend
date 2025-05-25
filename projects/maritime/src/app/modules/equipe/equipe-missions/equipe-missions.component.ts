import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide, staggeredList } from '../../../shared/animations';

@Component({
  selector: 'app-equipe-missions',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeSlide, staggeredList],
  templateUrl: './equipe-missions.component.html',
  styleUrls: ['./equipe-missions.component.scss']
})
export class EquipeMissionsComponent {
  missions = [
    {
      titre: 'Engagement',
      description: 'Notre équipe s’engage à fournir un service maritime d’excellence, dans le respect des normes internationales.',
      icone: 'assets/svg/eng.svg'
    },
    {
      titre: 'Réactivité',
      description: 'Grâce à notre présence locale et à notre expertise, nous répondons rapidement aux besoins de nos clients.',
      icone: 'assets/svg/reactivite.svg'
    },
    {
      titre: 'Sécurité',
      description: 'La sécurité de vos marchandises est notre priorité. Nous veillons à leur suivi rigoureux à chaque étape.',
      icone: 'assets/svg/securite.svg'
    }
  ];
}
