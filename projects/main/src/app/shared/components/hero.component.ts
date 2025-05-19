import {
  Component,
  Input,
  HostListener,
  Inject,
  PLATFORM_ID,
  OnInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() title = 'Bienvenue chez Marials';
  @Input() subtitle = 'Une entreprise multisectorielle tournée vers l’avenir';
  @Input() backgroundImages: string[] = ['assets/images/hero1.jpg', 'assets/images/hero2.jpg'];
  @Input() ctaText = 'En savoir plus';
  @Input() ctaLink = '/a-propos';

  currentBackgroundIndex = 0;
  parallaxOffset = 0;
  isBrowser: boolean;

  typingText = '';
  private typingIndex = 0;
  private charIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  @Input() subtitles: string[] = [this.subtitle]; // pour override multiple
  subtitleIndex = 0;

  ngOnInit(): void {
    if (this.isBrowser) {
      setInterval(() => {
        this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
        if (this.subtitles.length > 1) {
          this.subtitleIndex = (this.subtitleIndex + 1) % this.subtitles.length;
        }
      }, 24000);

      this.startTypingCycle(); // Démarre le cycle initial
    }
  }

  startTypingCycle() {
    this.setCurrentImageAndSubtitle();

    setInterval(() => {
      this.setCurrentImageAndSubtitle();
    }, 6000); // même durée que le fond
  }

  setCurrentImageAndSubtitle() {
    this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
    if (this.subtitles.length > 1) {
      this.subtitleIndex = (this.subtitleIndex + 1) % this.subtitles.length;
    }

    // Efface le texte actuel avant d'en écrire un autre
    this.typingText = '';
    this.charIndex = 0;

    // Lance l'animation après un petit délai (ex: 600ms)
    setTimeout(() => {
      this.typeCharacter();
    }, 600);
  }

  typeCharacter() {
    const fullText = this.subtitles[this.subtitleIndex] || this.subtitle;
    if (this.charIndex < fullText.length) {
      this.typingText += fullText[this.charIndex];
      this.charIndex++;
      setTimeout(() => this.typeCharacter(), 50); // vitesse de frappe
    }
  }


  get currentSubtitle(): string {
    return this.subtitles[this.subtitleIndex] || this.subtitle;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      const scrollTop = window.scrollY || 0;
      this.parallaxOffset = scrollTop * 0.3;
    }
  }

  get currentBackground(): string {
    return this.backgroundImages[this.currentBackgroundIndex];
  }
}
