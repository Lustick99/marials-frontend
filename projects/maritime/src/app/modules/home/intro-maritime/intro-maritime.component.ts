import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { zoomIn } from '../../../shared/animations';

@Component({
  selector: 'app-intro-maritime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-maritime.component.html',
  styleUrls: ['./intro-maritime.component.scss'],
  animations: [zoomIn]
})
export class IntroMaritimeComponent { }
