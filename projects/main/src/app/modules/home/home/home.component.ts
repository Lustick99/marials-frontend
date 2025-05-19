import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../../shared/section/section.component';
import { CardComponent } from '../../../shared/card/card.component';
import { CallToActionComponent } from '../../../shared/call-to-action/call-to-action.component';
import { PartnersComponent } from '../../../shared/partners/partners.component';
import { StatsComponent } from '../../../shared/stats/stats.component';
import { PartnersCarouselComponent } from '../../../shared/partners-carousel/partners-carousel.component';
import { AboutPreviewComponent } from '../../../shared/about-preview/about-preview.component';
import { HeroComponent } from '../../../shared/components/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    CardComponent,
    CallToActionComponent,
    // PartnersComponent,
    StatsComponent,
    PartnersCarouselComponent,
    AboutPreviewComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  poles = [
    {
      title: 'Maritime Chiphandling',
      desc: 'Gestion et manutention maritime spécialisée',
      url: 'https://maritime.marials.com'
    },
    {
      title: 'Marketing Communication',
      desc: 'Stratégies et campagnes marketing innovantes',
      url: 'https://marketing.marials.com'
    },
    {
      title: 'Immobilier - Construction',
      desc: 'Projets immobiliers et solutions de construction',
      url: 'https://immobilier.marials.com'
    },
    {
      title: 'Agence de Recrutement',
      desc: 'Recrutement sur mesure et gestion RH',
      url: 'https://recrutement.marials.com'
    },
    {
      title: 'Prestation de Service',
      desc: 'Services variés adaptés à vos besoins',
      url: 'https://services.marials.com'
    },
    {
      title: 'Assistance Visa',
      desc: 'Accompagnement complet pour vos démarches visa',
      url: 'https://visa.marials.com'
    }
  ];


  partners = [
    { name: 'Partner 1', logoUrl: 'assets/partners/partner1.png' },
    { name: 'Partner 2', logoUrl: 'assets/partners/partner2.png' },
    { name: 'Partner 3', logoUrl: 'assets/partners/partner3.png' },
    { name: 'Partner 4', logoUrl: 'assets/partners/partner4.png' }
  ];

  stats = [
    { label: 'Années d’expérience', value: 12 },
    { label: 'Axes couverts', value: 6 },
    { label: 'Clients servis', value: 340 },
    { label: 'Collaborateurs', value: 25 }
  ];


  getImageUrl(index: number): string {
    return `assets/images/axes/axe-${index + 1}.jpg`;
  }
}
