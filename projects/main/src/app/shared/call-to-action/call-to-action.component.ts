import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  @Input() text: string = 'Prêt à collaborer avec nous ?';
  @Input() buttonText: string = 'Contactez-nous';
  @Input() buttonLink: string = '/contact';
}
