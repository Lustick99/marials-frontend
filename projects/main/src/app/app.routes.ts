import { ExtraOptions, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./modules/a-propos/a-propos/a-propos.component').then(m => m.AProposComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./modules/contact/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'test',
    loadComponent: () => import('./modules/test/test/test.component').then(m => m.TestComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: '404',
  //   loadComponent: () => import('./modules/not-found/not-found/not-found.component').then(m => m.NotFoundComponent),
  // }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};
