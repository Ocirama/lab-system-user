import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrayComponent } from './tray.component';


const routes: Routes = [
  {
    path: '',
    component: TrayComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TrayRoutingModule {
}
