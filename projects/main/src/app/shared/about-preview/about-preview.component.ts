import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-preview.component.html',
  styleUrls: ['./about-preview.component.scss']
})
export class AboutPreviewComponent {
  images = [
    'assets/images/about1.jpg',
    'assets/images/about2.jpg',
    'assets/images/about3.jpg'
  ];
  currentImageIndex = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  parallaxOffset = 0;
  
  ngOnInit() {
    if (this.isBrowser) {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 6000);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.parallaxOffset = scrollTop * 0.2; // effet doux
  }
}
