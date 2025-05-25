import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide, zoomIn } from '../../../shared/animations';

@Component({
  selector: 'app-galerie-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie-grid.component.html',
  styleUrls: ['./galerie-grid.component.scss'],
  animations: [fadeSlide, zoomIn]
})
export class GalerieGridComponent implements OnChanges {
  @Input() images: { src: string; alt: string; category: string }[] = [];
  @Output() imageClick = new EventEmitter<number>();

  shuffledImages: { src: string; alt: string; category: string }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images']) {
      this.shuffledImages = this.shuffleArray([...this.images]);
    }
  }

  handleClick(index: number): void {
    this.imageClick.emit(index);
  }

  private shuffleArray<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
}
