import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProjectHomeComponent } from './card-project-home/card-project-home.component';

const routes: Routes = [
  {
    path: '',
    component: CardProjectHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardProjectRoutingModule {}
