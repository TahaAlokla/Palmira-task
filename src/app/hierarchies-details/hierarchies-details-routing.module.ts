import { LINKEDKPITabComponent } from './components/linked-kpi-tab/linked-kpi-tab.component';
import { LINKEDOBJECTSTabComponent } from './components/linked-objects-tab/linked-objects-tab.component';
import { SUBORDINATESTabComponent } from './components/subordinates-tab/subordinates-tab.component';
import { RESPONSIBILITIESTabComponent } from './components/responsibilities-tab/responsibilities-tab.component';
import { USERDEFINEDTabComponent } from './components/user-defined-tab/user-defined-tab.component';
import { HierarchyInfoTabComponent } from './components/hierarchy-info-tab/hierarchy-info-tab.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'info-tab',component:HierarchyInfoTabComponent},
    {path:'user-tab',component:USERDEFINEDTabComponent},
    {path:'subordinates-tab',component:SUBORDINATESTabComponent},
    {path:'profile-tab',component:LINKEDOBJECTSTabComponent},
    {path:'home-tab',component:LINKEDKPITabComponent},
    {path:'responsibilities-tab',component:RESPONSIBILITIESTabComponent},
    {path:'**',component:HierarchyInfoTabComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchiesDetailsRoutingModule { }
