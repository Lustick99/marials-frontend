import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AppelActionComponent } from './appel-action/appel-action.component';
import { ChiffresClefsComponent } from './chiffres-clefs/chiffres-clefs.component';
import { NosPartenairesComponent } from './nos-partenaires/nos-partenaires.component';
import { ServicesOffertsComponent } from './services-offerts/services-offerts.component';
import { TemoignagesClientsComponent } from './temoignages-clients/temoignages-clients.component';
import { IntroMaritimeComponent } from './intro-maritime/intro-maritime.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    IntroMaritimeComponent,
    AppelActionComponent,
    ChiffresClefsComponent,
    NosPartenairesComponent,
    ServicesOffertsComponent,
    TemoignagesClientsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
