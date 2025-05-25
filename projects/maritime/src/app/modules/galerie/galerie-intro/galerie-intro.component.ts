import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-galerie-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie-intro.component.html',
  styleUrls: ['./galerie-intro.component.scss'],
  animations: [fadeSlide]
})
export class GalerieIntroComponent { }
