import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app-component/app.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives-module/directives-module.module').then(
        (m) => m.DirectivesModuleModule
      ),
  },
  {
    path: 'semantic',
    loadChildren: () =>
      import('./semantic-ui-module/semantic-ui-module.module').then(
        (m) => m.SemanticUiModuleModule
      ),
  },
  {
    path: 'wiki',
    loadChildren: () =>
      import('./wiki-module/wiki-module.module').then(
        (m) => m.WikiModuleModule
      ),
  },
  {
    path: 'obs',
    loadChildren: () =>
      import('./observable-module/observable-module.module').then(
        (m) => m.ObservableModuleModule
      ),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
