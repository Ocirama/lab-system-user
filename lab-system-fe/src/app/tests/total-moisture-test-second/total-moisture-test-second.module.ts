import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalMoistureTestSecondRoutingModule } from './total-moisture-test-second-routing.module';
import { TotalMoistureTestSecondComponent } from './total-moisture-test-second.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [TotalMoistureTestSecondComponent],
  imports: [
    CommonModule,
    TotalMoistureTestSecondRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ]
})
export class TotalMoistureTestSecondModule { }
