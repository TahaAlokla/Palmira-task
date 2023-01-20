import { HierarchiesDetailsService } from './services/hierarchies-details.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchiesDetailsRoutingModule } from './hierarchies-details-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuProfilePageComponent } from './components/side-menu-profile-page/side-menu-profile-page.component';
import { SideMenuLinkSectionComponent } from './components/side-menu-link-section/side-menu-link-section.component';
import { StatisticsDataComponent } from './components/statistics-data/statistics-data.component';
import { SideTableSectionComponent } from './components/side-table-section/side-table-section.component';
import { HierarchyInfoTabComponent } from './components/hierarchy-info-tab/hierarchy-info-tab.component';
import { USERDEFINEDTabComponent } from './components/user-defined-tab/user-defined-tab.component';
import { RESPONSIBILITIESTabComponent } from './components/responsibilities-tab/responsibilities-tab.component';
import { SUBORDINATESTabComponent } from './components/subordinates-tab/subordinates-tab.component';
import { LINKEDOBJECTSTabComponent } from './components/linked-objects-tab/linked-objects-tab.component';
import { LINKEDKPITabComponent } from './components/linked-kpi-tab/linked-kpi-tab.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SideMenuComponent,
    SideMenuProfilePageComponent,
    SideMenuLinkSectionComponent,
    StatisticsDataComponent,
    SideTableSectionComponent,
    HierarchyInfoTabComponent,
    USERDEFINEDTabComponent,
    RESPONSIBILITIESTabComponent,
    SUBORDINATESTabComponent,
    LINKEDOBJECTSTabComponent,
    LINKEDKPITabComponent
  ],
  imports: [
    CommonModule,
    HierarchiesDetailsRoutingModule,
    OverlayscrollbarsModule
  ],
  providers:[
    HierarchiesDetailsService
  ]
})
export class HierarchiesDetailsModule { }
