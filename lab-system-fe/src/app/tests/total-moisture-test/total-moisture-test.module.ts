import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalMoistureTestRoutingModule } from './total-moisture-test-routing.module';
import { TotalMoistureTestComponent } from './total-moisture-test.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [TotalMoistureTestComponent],
  imports: [
    CommonModule,
    TotalMoistureTestRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class TotalMoistureTestModule { }
