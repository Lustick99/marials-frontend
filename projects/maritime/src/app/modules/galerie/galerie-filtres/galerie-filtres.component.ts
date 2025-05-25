import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-galerie-filtres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie-filtres.component.html',
  styleUrls: ['./galerie-filtres.component.scss'],
  animations: [fadeSlide]
})
export class GalerieFiltresComponent {
  @Input() categories: string[] = [];
  @Output() filterChange = new EventEmitter<string>();

  selected = 'Tous';

  selectCategory(category: string) {
    this.selected = category;
    this.filterChange.emit(category);
  }
}
