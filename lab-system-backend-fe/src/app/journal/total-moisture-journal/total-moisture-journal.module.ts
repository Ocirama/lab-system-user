import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalMoistureListComponent } from './total-moisture-list/total-moisture-list.component';
import {
  _MatMenuDirectivesModule, MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {TotalMoistureJournalRoutingModule} from './total-moisture-journal-routing.module';



@NgModule({
  declarations: [TotalMoistureListComponent],
  imports: [
    TotalMoistureJournalRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class TotalMoistureJournalModule { }
