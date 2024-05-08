import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TableComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
