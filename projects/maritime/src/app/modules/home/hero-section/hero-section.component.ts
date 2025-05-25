import { Component } from '@angular/core';
import { fadeIn } from '../../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [fadeIn]
})
export class HeroSectionComponent { }
