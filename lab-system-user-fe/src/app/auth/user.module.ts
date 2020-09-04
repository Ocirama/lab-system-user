import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmComponent} from './confirm/confirm.component';

import {LoginComponent} from './login/login.component';
import {SystemModule} from '../system/system.module';
import {CreateComponent} from '../system/create/create.component';


@NgModule({
  declarations: [ ConfirmComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    SystemModule
  ],
  exports: [LoginComponent],
  entryComponents: [
    ConfirmComponent,
    CreateComponent,
  ]
})
export class UserModule {
}
