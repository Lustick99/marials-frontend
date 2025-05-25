import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-galerie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie-banner.component.html',
  styleUrls: ['./galerie-banner.component.scss'],
  animations: [fadeSlide]
})
export class GalerieBannerComponent { }
