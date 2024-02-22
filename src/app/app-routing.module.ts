import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app-component/app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./home-module/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'password-generator',
    loadChildren: () =>
      import('./password-generator-module/password-generator.module').then(
        (m) => m.PasswordGeneratorModule
      ),
  },
  {
    path: 'card-project',
    loadChildren: () =>
      import('./card-project-module/card-project.module').then(
        (m) => m.CardProjectModule
      ),
  },
  {
    path: 'typing-challenge',
    loadChildren: () =>
      import('./typing-challenge-module/typing-challenge-module.module').then(
        (m) => m.TypingChallengeModuleModule
      ),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes-module/pipes-module.module').then(
        (m) => m.PipesModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
