import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceTrayComponent } from './reference-tray.component';


const routes: Routes = [
  {
    path: '',
    component: ReferenceTrayComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ReferenceTrayRoutingModule {
}
