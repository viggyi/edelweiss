import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Home2 } from './pages/home2/home2';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home2', component: Home2 },
];
