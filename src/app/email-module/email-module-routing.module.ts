import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailHomeComponent } from './email-home/email-home.component';

const routes: Routes = [
  {
    path: '',
    component: EmailHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailModuleRoutingModule {}
