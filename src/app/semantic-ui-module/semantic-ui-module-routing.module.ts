import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemanticUiHomeComponent } from './semantic-ui-home/semantic-ui-home.component';

const routes: Routes = [
  {
    path: '',
    component: SemanticUiHomeComponent,
    children: [
      {
        path: 'mods',
        loadChildren: () =>
          import('./mods/mods.module').then((m) => m.ModsModule),
      },
      {
        path: 'elements',
        loadChildren: () =>
          import('./elements/elements.module').then((m) => m.ElementsModule),
      },
      {
        path: 'views',
        loadChildren: () =>
          import('./views/views.module').then((m) => m.ViewsModule),
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('./collections/collections.module').then(
            (m) => m.CollectionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemanticUiModuleRoutingModule {}
