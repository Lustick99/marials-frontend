import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, scaleIn } from '../../../shared/animations';

@Component({
  selector: 'app-appel-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appel-action.component.html',
  styleUrls: ['./appel-action.component.scss'],
  animations: [fadeIn, scaleIn]
})
export class AppelActionComponent { }
