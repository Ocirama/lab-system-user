import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TotalMoistureTestSecondComponent} from './total-moisture-test-second.component';



const routes: Routes = [
  {
    path: '',
    component: TotalMoistureTestSecondComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TotalMoistureTestSecondRoutingModule {
}
