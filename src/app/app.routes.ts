import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Mohamed Elbarbary',
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(m => m.ContactComponent),
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./pages/resume/resume.component').then(m => m.ResumeComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'works',
        loadComponent: () =>
          import('./pages/works/works.component').then(m => m.WorksComponent),
      },
    ],
  },
];
