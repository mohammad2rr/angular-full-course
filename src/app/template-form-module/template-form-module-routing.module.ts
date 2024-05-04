import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFHomeComponent } from './template-f-home/template-f-home.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateFHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateFormModuleRoutingModule {}
