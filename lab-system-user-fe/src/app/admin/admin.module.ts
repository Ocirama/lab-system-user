import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './user-list/modal/modal.component';
import {UserListComponent} from './user-list/user-list.component';
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
