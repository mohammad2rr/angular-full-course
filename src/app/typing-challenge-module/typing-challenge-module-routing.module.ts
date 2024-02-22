import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingChallengeHomeComponent } from './typing-challenge-home/typing-challenge-home.component';

const routes: Routes = [
  {
    path: '',
    component: TypingChallengeHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypingChallengeModuleRoutingModule {}
