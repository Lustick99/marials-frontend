import { Component } from '@angular/core';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { ContactIntroComponent } from './contact-intro/contact-intro.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCoordonneesComponent } from './contact-coordonnees/contact-coordonnees.component';
import { ContactInfosComponent } from './contact-infos/contact-infos.component';
import { MapComponent } from '../../../../../main/src/app/shared/map/map.component';

@Component({
  selector: 'app-contact',
  imports: [
    ContactBannerComponent,
    ContactIntroComponent,
    ContactFormComponent,
    ContactCoordonneesComponent,
    ContactInfosComponent,
    MapComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
