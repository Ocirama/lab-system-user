import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AshJournalRoutingModule} from './ash-journal-routing.module';
import {AshJournalComponent} from './ash-journal.component';



@NgModule({
  declarations: [AshJournalComponent],
  imports: [AshJournalRoutingModule,
    CommonModule
  ]
})
export class AshJournalModule { }
