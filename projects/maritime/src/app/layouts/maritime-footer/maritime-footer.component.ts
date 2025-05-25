import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maritime-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maritime-footer.component.html',
  styleUrls: ['./maritime-footer.component.scss'],
})
export class MaritimeFooterComponent {
  currentYear: number = new Date().getFullYear();
}
