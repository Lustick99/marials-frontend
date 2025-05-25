import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-contact-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.scss'],
  animations: [fadeSlide]
})
export class ContactBannerComponent { }
