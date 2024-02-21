import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { PasswordGeneratorModule } from './password-generator-module/password-generator.module';
import { CardProjectModule } from './card-project-module/card-project.module';
import { HomeModule } from './home-module/home.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordGeneratorModule,
    CardProjectModule,
    HomeModule,
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
