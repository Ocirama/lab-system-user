import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('./log/log.module').then(m => m.LogModule)
  },
  {
    path: 'sample',
    loadChildren: () =>
      import('./sample/sample.module').then(m => m.SampleModule)
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
  {
    path: 'total-moisture-journal',
    loadChildren: () =>
      import('./journal/total-moisture-journal/total-moisture-journal.module').then(m => m.TotalMoistureJournalModule)
  },
  {
    path: 'general-moisture-journal',
    loadChildren: () =>
      import('./journal/general-moisture-journal/general-moisture-journal.module').then(m => m.GeneralMoistureJournalModule)
  },
  {
    path: 'sample-weight',
    loadChildren: () =>
      import('./sample/sample-weight/sample-weight.module').then(m => m.SampleWeightModule)
  },
  {
    path: 'ash-journal',
    loadChildren: () =>
      import('./journal/ash-journal/ash-journal.module').then(m => m.AshJournalModule)
  },
  {
    path: 'total-moisture-test',
    loadChildren: () =>
      import('./tests/total-moisture-test/total-moisture-test.module').then(m => m.TotalMoistureTestModule)
  },
  {
    path: 'tray',
    loadChildren: () =>
      import('./tray/tray.module').then(m => m.TrayModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
