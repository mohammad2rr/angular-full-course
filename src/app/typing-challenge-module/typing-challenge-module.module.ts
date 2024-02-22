import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingChallengeModuleRoutingModule } from './typing-challenge-module-routing.module';
import { TypingChallengeHomeComponent } from './typing-challenge-home/typing-challenge-home.component';


@NgModule({
  declarations: [
    TypingChallengeHomeComponent
  ],
  imports: [
    CommonModule,
    TypingChallengeModuleRoutingModule
  ]
})
export class TypingChallengeModuleModule { }
