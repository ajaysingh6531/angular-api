import { Routes } from '@angular/router';
import { Admin } from './admin/admin';

export const routes: Routes = [
    // {path:'admin',component:Admin}
    {path:'admin',loadComponent:()=>import('./admin/admin').then((c)=>c.Admin)}
];
