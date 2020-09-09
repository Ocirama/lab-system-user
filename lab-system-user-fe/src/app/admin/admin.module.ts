import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './user-list/modal/modal.component';
import {UserListComponent} from './user-list/user-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableExporterModule} from 'mat-table-exporter';
import {AdminRoutingModule} from './admin-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {RegisterComponent} from './user-list/register/register.component';
import {SystemModule} from '../system/system.module';




@NgModule({
  declarations: [ModalComponent, UserListComponent, RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    SystemModule
  ],
  exports: [
    UserListComponent
  ],
  entryComponents: [
    ModalComponent, RegisterComponent
  ]
})
export class AdminModule {
}
