import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralMoistureJournalComponent} from './general-moisture-journal.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralMoistureJournalComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GeneralMoistureJournalRoutingModule {
}
