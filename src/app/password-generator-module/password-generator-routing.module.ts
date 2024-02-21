import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGeneratorHomeComponent } from './password-generator-home/password-generator-home.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordGeneratorHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordGeneratorRoutingModule {}
