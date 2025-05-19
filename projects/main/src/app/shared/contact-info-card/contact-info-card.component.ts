import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info-card.component.html',
  styleUrls: ['./contact-info-card.component.scss']
})
export class ContactInfoCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() content = '';
}
