import { Component } from '@angular/core';
import { GalerieBannerComponent } from './galerie-banner/galerie-banner.component';
import { GalerieFiltresComponent } from './galerie-filtres/galerie-filtres.component';
import { GalerieGridComponent } from './galerie-grid/galerie-grid.component';
import { GalerieIntroComponent } from './galerie-intro/galerie-intro.component';
import { GalerieLightboxComponent } from './galerie-lightbox/galerie-lightbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [
    CommonModule,
    GalerieBannerComponent,
    GalerieIntroComponent,
    GalerieFiltresComponent,
    GalerieGridComponent,
    GalerieLightboxComponent,
  ],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent {
  images = [
    { src: '/assets/images/galerie/photo1.jpg', alt: 'Photo 1', category: 'ShipChandling' },
    { src: '/assets/images/galerie/photo2.jpg', alt: 'Photo 2', category: 'ShipChandling' },
    { src: '/assets/images/galerie/photo3.jpg', alt: 'Photo 3', category: 'Logistique' },
    { src: '/assets/images/galerie/photo4.jpg', alt: 'Photo 4', category: 'Transport' },
    { src: '/assets/images/galerie/photo5.jpg', alt: 'Photo 5', category: 'Logistique' },
    { src: '/assets/images/galerie/photo6.jpg', alt: 'Photo 6', category: 'Documentation' },
    { src: '/assets/images/galerie/photo7.jpg', alt: 'Photo 7', category: 'Maintenance' },
    { src: '/assets/images/galerie/photo8.jpg', alt: 'Photo 8', category: 'Assistance' },
    { src: '/assets/images/galerie/photo9.jpg', alt: 'Photo 9', category: 'Approvisionnement' },
    { src: '/assets/images/galerie/photo19.jpg', alt: 'Photo 19', category: 'Car Rental' },
    { src: '/assets/images/galerie/photo11.jpg', alt: 'Photo 11', category: 'ShipChandling' },
    { src: '/assets/images/galerie/photo12.jpg', alt: 'Photo 12', category: 'Transport' },
    { src: '/assets/images/galerie/photo13.jpg', alt: 'Photo 13', category: 'Documentation' },
    { src: '/assets/images/galerie/photo14.jpg', alt: 'Photo 14', category: 'Maintenance' },
    { src: '/assets/images/galerie/photo15.jpg', alt: 'Photo 15', category: 'Assistance' },
    { src: '/assets/images/galerie/photo16.jpg', alt: 'Photo 16', category: 'Approvisionnement' },
    { src: '/assets/images/galerie/photo18.jpg', alt: 'Photo 18', category: 'Car Rental' },
    { src: '/assets/images/galerie/photo17.jpg', alt: 'Photo 17', category: 'ShipChandling' },
    { src: '/assets/images/galerie/photo10.jpg', alt: 'Photo 10', category: 'Transport' },
    { src: '/assets/images/galerie/photo20.jpg', alt: 'Photo 20', category: 'Car Rental' },
    { src: '/assets/images/galerie/photo21.jpg', alt: 'Photo 21', category: 'Car Rental' }
  ];

  categories = ['ShipChandling', 'Logistique', 'Transport','Documentation', 'Maintenance', 'Assistance', 'Approvisionnement', 'Car Rental'];
  selectedCategory: string = 'Tous';

  get filteredImages() {
    return this.selectedCategory === 'Tous'
      ? this.images
      : this.images.filter(img => img.category === this.selectedCategory);
  }

  setCategoryFilter(category: string) {
    this.selectedCategory = category;
  }

  lightboxOpen = false;
  selectedIndex = 0;

  openLightbox(index: number) {
    this.selectedIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }
}
