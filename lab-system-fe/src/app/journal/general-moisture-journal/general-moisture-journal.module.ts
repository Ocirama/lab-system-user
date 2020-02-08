import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralMoistureJournalRoutingModule} from './general-moisture-journal-routing.module';
import {GeneralMoistureJournalComponent} from './general-moisture-journal.component';



@NgModule({
  declarations: [GeneralMoistureJournalComponent],
  imports: [
    GeneralMoistureJournalRoutingModule,
    CommonModule
  ]
})
export class GeneralMoistureJournalModule { }
