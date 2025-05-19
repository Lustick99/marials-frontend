import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title?: string;
  @Input() reverse = false;

  @ContentChild('left', { read: TemplateRef }) leftTemplate!: TemplateRef<any>;
  @ContentChild('right', { read: TemplateRef }) rightTemplate!: TemplateRef<any>;
  @ContentChild('center', { read: TemplateRef }) centerTemplate?: TemplateRef<any>;
}
