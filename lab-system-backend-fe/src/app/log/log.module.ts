import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ModalComponent} from './modal/modal.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {LogRoutingModule} from './log-routing.module';


@NgModule({
  declarations: [ListComponent, ModalComponent],
  imports: [
    CommonModule,
    LogRoutingModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class LogModule {
}
