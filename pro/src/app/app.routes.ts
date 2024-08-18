import { Routes } from '@angular/router';


export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'homepage',
    loadComponent: () => import('./pages/homepage/homepage.page').then( m => m.HomepagePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./pages/aboutus/aboutus.page').then( m => m.AboutusPage)
  },
  {
    path: 'contactus',
    loadComponent: () => import('./pages/contactus/contactus.page').then( m => m.ContactusPage)
  },
];
