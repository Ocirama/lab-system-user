import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';

import {ModalComponent} from './log/modal/modal.component';
import {FormComponent} from './order/form/form.component';
import {ListComponent} from './log/list/list.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatTableExporterModule} from 'mat-table-exporter';
import {DateModalComponent} from './log/date-modal/date-modal.component';
import {FileUploadModule} from 'ng2-file-upload';
import {MatFormFieldModule} from '@angular/material/form-field';


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
