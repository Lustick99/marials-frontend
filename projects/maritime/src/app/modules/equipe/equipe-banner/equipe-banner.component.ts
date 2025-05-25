import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-equipe-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipe-banner.component.html',
  styleUrls: ['./equipe-banner.component.scss'],
  animations: [fadeSlide]
})
export class EquipeBannerComponent { }
