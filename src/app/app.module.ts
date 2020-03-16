
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { PrimengModule } from './primeng/primeng.module';
import { TableComponent } from './table/table.component';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import { ChartsComponent } from './charts/charts.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TableComponent,
    MenuTabsComponent,
    ChartsComponent,
    CarouselComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
