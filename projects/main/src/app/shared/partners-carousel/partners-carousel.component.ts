import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-carousel.component.html',
  styleUrls: ['./partners-carousel.component.scss']
})
export class PartnersCarouselComponent {
  @Input() partners: { name: string; logoUrl: string }[] = [];
}
