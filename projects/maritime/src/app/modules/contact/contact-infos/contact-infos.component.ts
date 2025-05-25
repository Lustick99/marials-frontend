import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';
import { LucideIconsModule } from '../../../shared/modules/lucide-icons.module';

@Component({
  selector: 'app-contact-infos',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule
  ],
  templateUrl: './contact-infos.component.html',
  styleUrls: ['./contact-infos.component.scss'],
  animations: [fadeSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactInfosComponent { }
