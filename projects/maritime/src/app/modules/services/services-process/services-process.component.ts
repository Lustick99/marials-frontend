import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide, staggeredList } from '../../../shared/animations';

@Component({
  selector: 'app-services-process',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeSlide, staggeredList],
  templateUrl: './services-process.component.html',
  styleUrls: ['./services-process.component.scss']
})
export class ServicesProcessComponent { }
