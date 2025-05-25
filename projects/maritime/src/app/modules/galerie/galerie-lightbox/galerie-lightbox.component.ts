import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, fadeOut } from '../../../shared/animations';

@Component({
  selector: 'app-galerie-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie-lightbox.component.html',
  styleUrls: ['./galerie-lightbox.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class GalerieLightboxComponent {
  @Input() images: { src: string; alt: string; category: string }[] = [];
  @Input() currentIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close.emit();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) this.currentIndex++;
  }

  prevImage() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  closeLightbox() {
    this.close.emit();
  }

  get currentImage() {
    return this.images[this.currentIndex];
  }

}
