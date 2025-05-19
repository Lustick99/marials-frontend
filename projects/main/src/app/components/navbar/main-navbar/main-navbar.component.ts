import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent {
  // isMobileMenuOpen = false;

  // toggleMobileMenu() {
  //   this.isMobileMenuOpen = !this.isMobileMenuOpen;
  // }


  isMenuOpen = false;
  isAxesOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) this.isAxesOpen = false;
  }

  toggleAxes(event: Event) {
    event.preventDefault();
    this.isAxesOpen = !this.isAxesOpen;
  }

  onHover(open: boolean) {
    if (window.innerWidth > 768) {
      this.isAxesOpen = open;
    }
  }

  closeAll() {
    this.isMenuOpen = false;
    this.isAxesOpen = false;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
