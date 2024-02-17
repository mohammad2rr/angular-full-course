import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { PasswordGeneratorModule } from './password-generator/password-generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PasswordGeneratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
