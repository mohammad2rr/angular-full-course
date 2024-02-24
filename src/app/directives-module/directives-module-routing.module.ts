import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesHomeComponent } from './directives-home/directives-home.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivesHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesModuleRoutingModule {}
