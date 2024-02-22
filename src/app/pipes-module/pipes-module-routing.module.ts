import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesHomeComponent } from './pipes-home/pipes-home.component';

const routes: Routes = [
  {
    path: '',
    component: PipesHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesModuleRoutingModule {}
