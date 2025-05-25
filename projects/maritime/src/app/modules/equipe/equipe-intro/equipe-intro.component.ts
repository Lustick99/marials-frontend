import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-equipe-intro',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeSlide],
  templateUrl: './equipe-intro.component.html',
  styleUrls: ['./equipe-intro.component.scss']
})
export class EquipeIntroComponent { }
