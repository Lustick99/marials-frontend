import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-contact-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-intro.component.html',
  styleUrls: ['./contact-intro.component.scss'],
  animations: [fadeSlide]
})
export class ContactIntroComponent { }
