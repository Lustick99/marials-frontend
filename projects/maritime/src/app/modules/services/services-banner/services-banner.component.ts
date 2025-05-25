import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../../shared/animations';

@Component({
  selector: 'app-services-banner',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  templateUrl: './services-banner.component.html',
  styleUrls: ['./services-banner.component.scss']
})
export class ServicesBannerComponent {}
