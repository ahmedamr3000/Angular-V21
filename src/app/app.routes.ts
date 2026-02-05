import { Home } from './components/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'recipes',
    loadComponent: () => import('./components/recipes/recipes').then((m) => m.Recipes),
  },
  {
    path: 'shopping-list',
    loadComponent: () => import('./components/shopping-list/shopping-list').then((m) => m.ShoppingList),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
