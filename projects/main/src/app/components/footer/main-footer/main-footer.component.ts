import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {
  public currentYear: number = new Date().getFullYear();
}