import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
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
    path: 'ash-journal',
    loadChildren: () =>
      import('./journal/ash-journal/ash-journal.module').then(m => m.AshJournalModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
