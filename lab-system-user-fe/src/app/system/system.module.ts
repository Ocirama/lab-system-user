import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';

import {ModalComponent} from './log/modal/modal.component';
import {FormComponent} from './order/form/form.component';
import {ListComponent} from './log/list/list.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatTableExporterModule} from 'mat-table-exporter';
import {DateModalComponent} from './log/date-modal/date-modal.component';
import {FileUploadModule} from 'ng2-file-upload';


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
        MatToolbarModule,
        FileUploadModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatSortModule
    ],

  providers: [DatePipe],

  exports: [ListComponent],
  entryComponents: [
    DateModalComponent, ModalComponent
  ]
})
export class SystemModule {
}
