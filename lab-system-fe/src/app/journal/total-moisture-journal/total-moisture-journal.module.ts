import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalMoistureListComponent } from './total-moisture-list/total-moisture-list.component';
import {
  _MatMenuDirectivesModule, MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {TotalMoistureJournalRoutingModule} from './total-moisture-journal-routing.module';
import { TotalMoistureModalComponent } from './total-moisture-modal/total-moisture-modal.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from '../../log/modal/modal.component';



@NgModule({
  declarations: [TotalMoistureListComponent, TotalMoistureModalComponent],
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
    MatPaginatorModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    TotalMoistureModalComponent
  ]
})
export class TotalMoistureJournalModule { }
