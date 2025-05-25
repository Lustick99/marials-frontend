import { Component } from '@angular/core';
import { EquipeBannerComponent } from './equipe-banner/equipe-banner.component';
import { EquipeIntroComponent } from './equipe-intro/equipe-intro.component';
import { EquipeMembresComponent } from './equipe-membres/equipe-membres.component';
import { EquipeMissionsComponent } from './equipe-missions/equipe-missions.component';
import { EquipeRecrutementComponent } from './equipe-recrutement/equipe-recrutement.component';

@Component({
  selector: 'app-equipe',
  imports: [
    EquipeBannerComponent,
    EquipeIntroComponent,
    EquipeMembresComponent,
    EquipeMissionsComponent,
    EquipeRecrutementComponent
  ],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent {

}
