import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
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
