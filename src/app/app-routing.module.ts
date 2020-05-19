import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorldwidedashboardComponent } from './components/worldwidedashboard/worldwidedashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChartsComponent } from './components/charts/charts.component';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: WorldwidedashboardComponent
  },
  {
    path: 'home',
    component: ChartsComponent
  },

  // {
  //   path: 'worldwide',
  //   component: WorldwidedashboardComponent
  // },
  // {
  //   path: 'graphical',
  //   component: ChartsComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutusComponent
  // },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
