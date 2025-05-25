import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./modules/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'equipe',
    loadComponent: () =>
      import('./modules/equipe/equipe.component').then((m) => m.EquipeComponent),
  },
  {
    path: 'galerie',
    loadComponent: () =>
      import('./modules/galerie/galerie.component').then((m) => m.GalerieComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./modules/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
