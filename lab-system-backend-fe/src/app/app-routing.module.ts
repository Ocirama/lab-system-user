import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./log/log.module').then(m => m.LogModule)
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'log',
    loadChildren: () =>
      import('./log/log.module').then(m => m.LogModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
