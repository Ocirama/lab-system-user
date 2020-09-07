import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective } from '../../tab.directive';



@NgModule({
  declarations: [TabDirective],
  imports: [
    CommonModule
  ],
  exports: [TabDirective]
})
export class SharedModule { }
