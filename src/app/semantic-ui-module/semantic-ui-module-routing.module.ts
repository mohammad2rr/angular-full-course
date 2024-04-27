import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemanticUiHomeComponent } from './semantic-ui-home/semantic-ui-home.component';

const routes: Routes = [
  {
    path: '',
    component: SemanticUiHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemanticUiModuleRoutingModule {}
