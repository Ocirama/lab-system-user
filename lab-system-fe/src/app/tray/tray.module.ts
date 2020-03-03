import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrayComponent } from './tray.component';
import { TrayRoutingModule } from './tray-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TabDirective } from '../tab.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TrayComponent],
  imports: [
    CommonModule,
    TrayRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ]
})
export class TrayModule {
}
