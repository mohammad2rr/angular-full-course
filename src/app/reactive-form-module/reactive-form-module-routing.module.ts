import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFHomeComponent } from './reactive-f-home/reactive-f-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormModuleRoutingModule {}
