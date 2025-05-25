import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../../shared/animations';

@Component({
  selector: 'app-services-faq',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  templateUrl: './services-faq.component.html',
  styleUrls: ['./services-faq.component.scss']
})
export class ServicesFaqComponent {
  faqs = [
    {
      question: 'Quels services maritimes proposez-vous ?',
      answer: 'Nous offrons des services de shipchandling, logistique portuaire, affrètement, et plus encore.'
    },
    {
      question: 'Intervenez-vous dans plusieurs ports ?',
      answer: 'Oui, nous sommes actifs dans les principaux ports de la sous-région.'
    },
    {
      question: 'Puis-je obtenir un devis personnalisé ?',
      answer: 'Bien sûr, contactez-nous et nous vous ferons une proposition adaptée à vos besoins.'
    }
  ];

  openIndex = -1;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}