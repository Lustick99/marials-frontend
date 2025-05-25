import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maritime-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './maritime-navbar.component.html',
  styleUrls: ['./maritime-navbar.component.scss'],
})
export class MaritimeNavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}