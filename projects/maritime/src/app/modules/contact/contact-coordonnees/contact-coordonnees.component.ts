import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';
import { LucideIconsModule } from '../../../shared/modules/lucide-icons.module';

@Component({
  selector: 'app-contact-coordonnees',
  standalone: true,
  imports: [
    CommonModule, 
    LucideIconsModule
  ],
  templateUrl: './contact-coordonnees.component.html',
  styleUrls: ['./contact-coordonnees.component.scss'],
  animations: [fadeSlide],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContactCoordonneesComponent { }
