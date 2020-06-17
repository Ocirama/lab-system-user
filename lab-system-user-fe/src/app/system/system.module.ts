import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';

import {ModalComponent} from './order/modal/modal.component';
import {FormComponent} from './order/form/form.component';
import {ListComponent} from './log/list/list.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatTableExporterModule} from 'mat-table-exporter';
import {DateModalComponent} from './log/date-modal/date-modal.component';


@NgModule({
  declarations: [DateModalComponent, ModalComponent, CreateComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    NgMultiSelectDropDownModule,
    MatTableExporterModule,
    MatToolbarModule
  ],
  exports: [
    ListComponent
  ],
  entryComponents: [
    DateModalComponent
  ]
})
export class SystemModule {
}
