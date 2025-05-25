import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-services-intro',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeSlide],
  templateUrl: './services-intro.component.html',
  styleUrls: ['./services-intro.component.scss']
})
export class ServicesIntroComponent { }
