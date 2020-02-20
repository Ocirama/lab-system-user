import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleWeightRoutingModule } from './sample-weight-routing.module';
import { SampleWeightComponent } from './sample-weight.component';



@NgModule({
  declarations: [SampleWeightComponent],
  imports: [
    CommonModule,
    SampleWeightRoutingModule
  ]
})
export class SampleWeightModule { }
