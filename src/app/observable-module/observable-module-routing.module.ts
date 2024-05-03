import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsHomeComponent } from './obs-home/obs-home.component';

const routes: Routes = [
  {
    path: '',
    component: ObsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableModuleRoutingModule {}
