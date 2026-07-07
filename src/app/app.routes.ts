import {Routes} from '@angular/router';
import {AppRoute} from './core/constants/const';

export const routes: Routes = [{
  path: AppRoute.MAIN,
  title: 'Main',
  loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
},
  {
    path: AppRoute.LOGIN,
    title: 'Login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: AppRoute.WALLET,
    title: 'Wallet',
    loadComponent: () => import('./pages/wallet/wallet.component').then(m => m.WalletComponent),
  },
  {
    path: `${AppRoute.ARTIST}/:id`,
    title: 'Artist',
    loadComponent: () => import('./pages/artist/artist.component').then(m => m.ArtistComponent),
  },
  {
    path: AppRoute.MARKETPLACE,
    title: 'Marketplace',
    loadComponent: () => import('./pages/marketplace/marketplace.component').then(m => m.MarketplaceComponent),
  }
];
