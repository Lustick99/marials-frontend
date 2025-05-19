import { Component, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/card/card.component';
import { HeroComponent } from '../../../shared/components/hero.component';
import { SectionComponent } from '../../../shared/section/section.component';
import { StatsComponent } from '../../../shared/stats/stats.component';
import { PartnersCarouselComponent } from '../../../shared/partners-carousel/partners-carousel.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [
    CommonModule, 
    SectionComponent, 
    CardComponent, 
    StatsComponent,
    PartnersCarouselComponent
  ],
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent {
  parallaxOffset = 0;

  @HostBinding('style.--parallax-offset')
  get parallaxOffsetPx() {
    return `${this.parallaxOffset}px`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || 0;
    this.parallaxOffset = scrollTop * 0.3;
  }
  
  valeurs = [
    { title: 'Innovation', description: 'Des solutions modernes et évolutives.', icon: 'flame', image : 'assets/images/innovation.jpg' },
    { title: 'Proximité', description: 'Un accompagnement humain et local.', icon: 'users', image : 'assets/images/relation.jpg' },
    { title: 'Excellence', description: 'La qualité avant tout dans nos services.', icon: 'award', image : 'assets/images/excellence.jpg' },
  ];

  stats = [
    { label: 'Années d’expérience', value: 12 },
    { label: 'Projets réalisés', value: 250 },
    { label: 'Collaborateurs', value: 80 },
    { label: 'Partenaires internationaux', value: 30 }
  ];
}