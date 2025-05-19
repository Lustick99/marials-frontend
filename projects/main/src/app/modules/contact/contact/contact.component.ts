import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../../shared/contact-form/contact-form.component';
import { ContactInfoCardComponent } from '../../../shared/contact-info-card/contact-info-card.component';
import { MapComponent } from '../../../shared/map/map.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent,
    ContactInfoCardComponent,
    MapComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfos = [
    { icon: 'map-pin', title: 'Adresse', content: 'Quartier Lomé, Togo' },
    { icon: 'phone', title: 'Téléphone', content: '+228 90 00 00 00' },
    { icon: 'mail', title: 'Email', content: 'contact@marials.tg' },
  ];
}
