import { Page404Component } from './base-pages/page404/page404.component';
import { LoginComponent } from './base-pages/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: 'hierarchies',
    canLoad: [AuthGuard],
    loadChildren: () => import('./hierarchies-details/hierarchies-details.module').then(m => m.HierarchiesDetailsModule)
  },
  { path: '', redirectTo: '/hierarchies', pathMatch: 'full' },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
