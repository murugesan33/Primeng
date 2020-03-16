import { DataComponent } from './data/data.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChartsComponent } from './charts/charts.component';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import { TableComponent } from './table/table.component';

import { HomeComponent } from './home/home.component';




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';



const routes: Routes =[
  {path:'form',component: HomeComponent},
  {path:'menu',component: MenuTabsComponent},
  {path:'chart',component:ChartsComponent},
  {path:'table',component:TableComponent},
  {path:'carousel', component:CarouselComponent},
  {path:'dataview', component:DataComponent},
  {path:'',  redirectTo: 'form',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CalendarModule],
  exports: [RouterModule,CalendarModule]
})
export class AppRoutingModule { }
