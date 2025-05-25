import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { staggeredList } from '../../../shared/animations';

@Component({
  selector: 'app-equipe-membres',
  standalone: true,
  imports: [CommonModule],
  animations: [staggeredList],
  templateUrl: './equipe-membres.component.html',
  styleUrls: ['./equipe-membres.component.scss']
})
export class EquipeMembresComponent {
  membres = [
    {
      nom: 'Francis DJOSSOU',
      poste: 'Directeur Général',
      image: 'assets/images/profil.jpg',
      bio: 'Expert en logistique maritime avec plus de 15 ans d’expérience.'
    },
    {
      nom: 'Aïcha Koffi',
      poste: 'Responsable des Opérations',
      image: 'assets/images/profil.jpg',
      bio: 'Coordonne efficacement toutes les opérations terrain et portuaires.'
    },
    {
      nom: 'Franck Lawson',
      poste: 'Chef d’Agence',
      image: 'assets/images/profil.jpg',
      bio: 'Garant du bon déroulement des services dans chaque port couvert.'
    },
    {
      nom: 'Nadia Kouassi',
      poste: 'Responsable Commerciale',
      image: 'assets/images/profil.jpg',
      bio: 'Développe des relations solides avec nos clients et partenaires.'
    },
    {
      nom: 'Jean-Michel Adou',
      poste: 'Responsable Technique',
      image: 'assets/images/profil.jpg',
      bio: 'Assure la maintenance et la sécurité de notre flotte.'
    },
    {
      nom: 'Sophie Yao',
      poste: 'Assistante Administrative',
      image: 'assets/images/profil.jpg',
      bio: 'Gère les tâches administratives et le support client.'
    },
    {
      nom: 'Kouadio Kouassi',
      poste: 'Agent de Sécurité',
      image: 'assets/images/profil.jpg',
      bio: 'Assure la sécurité de nos installations et de notre personnel.'
    },
    {
      nom: 'Moussa Koné',
      poste: 'Agent de Transit',
      image: 'assets/images/profil.jpg',
      bio: 'Facilite le transit des marchandises à travers les ports.'
    }
  ];
}
