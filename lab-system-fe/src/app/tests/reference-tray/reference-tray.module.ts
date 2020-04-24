import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceTrayRoutingModule } from './reference-tray-routing.module';
import { ReferenceTrayComponent } from './reference-tray.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [ReferenceTrayComponent],
  imports: [
    CommonModule,
    ReferenceTrayRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ]
})
export class ReferenceTrayModule { }
