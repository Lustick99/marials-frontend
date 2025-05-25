import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-services-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeSlide],
  templateUrl: './services-cta.component.html',
  styleUrls: ['./services-cta.component.scss']
})
export class ServicesCtaComponent { }
