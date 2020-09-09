import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './core/auth.guard';
import {AuthGuard2} from './core/auth.guard2';


const routes: Routes = [
  {
    path: 'system',
    canActivate: [AuthGuard],
    loadChildren: () => import('./system/system.module').then(m => m.SystemModule)
  },
  {
    path: 'user/login',
    loadChildren: () => import('./auth/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard2],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
