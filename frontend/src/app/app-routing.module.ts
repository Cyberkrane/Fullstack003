import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'bussiness', 
    loadChildren: () => import('./bussiness/bussiness.module').then(m => m.BussinessModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
