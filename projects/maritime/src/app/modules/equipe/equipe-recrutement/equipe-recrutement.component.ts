import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-equipe-recrutement',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeSlide],
  templateUrl: './equipe-recrutement.component.html',
  styleUrls: ['./equipe-recrutement.component.scss']
})
export class EquipeRecrutementComponent { }
