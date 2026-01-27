import { Home } from './components/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
    pathMatch: 'full',
  },
];
