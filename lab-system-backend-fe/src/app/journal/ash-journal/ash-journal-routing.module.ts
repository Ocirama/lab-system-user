import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AshJournalComponent} from './ash-journal.component';

const routes: Routes = [
  {
    path: '',
    component: AshJournalComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AshJournalRoutingModule {
}
