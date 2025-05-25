import { Component } from '@angular/core';
import { ServicesBannerComponent } from './services-banner/services-banner.component';
import { ServicesAvantagesComponent } from './services-avantages/services-avantages.component';
import { ServicesCtaComponent } from './services-cta/services-cta.component';
import { ServicesFaqComponent } from './services-faq/services-faq.component';
import { ServicesIntroComponent } from './services-intro/services-intro.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesProcessComponent } from './services-process/services-process.component';

@Component({
  selector: 'app-services',
  imports: [
    ServicesBannerComponent,
    ServicesAvantagesComponent,
    ServicesCtaComponent,
    ServicesFaqComponent,
    ServicesIntroComponent,
    ServicesListComponent,
    ServicesProcessComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
