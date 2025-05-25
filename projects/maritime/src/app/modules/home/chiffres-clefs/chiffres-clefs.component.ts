import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../../shared/animations';

@Component({
  selector: 'app-chiffres-clefs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chiffres-clefs.component.html',
  styleUrls: ['./chiffres-clefs.component.scss'],
  animations: [fadeIn]
})
export class ChiffresClefsComponent {
  stats = [
    { label: 'Ports desservis', value: 25 },
    { label: 'Navires assistés', value: 350 },
    { label: 'Ans d’expérience', value: 12 },
    { label: 'Clients satisfaits', value: 180 }
  ];
}
