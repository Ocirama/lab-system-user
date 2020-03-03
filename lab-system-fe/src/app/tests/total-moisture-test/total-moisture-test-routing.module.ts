import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalMoistureTestComponent } from './total-moisture-test.component';


const routes: Routes = [
  {
    path: '',
    component: TotalMoistureTestComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TotalMoistureTestRoutingModule {
}
