import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'movies', loadComponent: () => import('./containers/movies/movies.component').then(c => c.GMoviesComponent) },
  { path: 'gallery', loadComponent: () => import('./containers/core/empty/empty.component').then(c => c.GEmptyComponent) },
  { path: 'author', canActivate: [], loadComponent: () => import('./containers/core/empty/empty.component').then(c => c.GEmptyComponent) },
  { path: 'login', loadComponent: () => import('./containers/core/empty/empty.component').then(c => c.GEmptyComponent) },
  { path: 'welcome', loadComponent: () => import('./containers/placeholder/placeholder.component').then(c => c.GPlaceholderComponent) },
  { path: 'store', loadComponent: () => import('./containers/signal-store/signal-store.component').then(c => c.GSignalStoreComponent) },
  { path: '404', loadComponent: () => import('./containers/core/page-not-found/page-not-found.component').then(c => c.GPageNotFoundComponent) },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./containers/core/page-not-found/page-not-found.component').then(c => c.GPageNotFoundComponent) },
];
