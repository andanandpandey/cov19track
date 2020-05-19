import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorldwidedashboardComponent } from './components/worldwidedashboard/worldwidedashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChartsComponent } from './components/charts/charts.component';

import { DataTablesModule } from 'angular-datatables';
import {DataTableModule} from "angular-6-datatable";
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    WorldwidedashboardComponent,
    AboutusComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    DataTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
