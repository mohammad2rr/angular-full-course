import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomVHomeComponent } from './custom-v-home/custom-v-home.component';

const routes: Routes = [
  {
    path: '',
    component: CustomVHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomValidationModuleRoutingModule {}
