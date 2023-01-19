import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { ResultsComponent } from './components/results/results.component';
import { DashboardComponent } from './components/results/dashboard/dashboard.component';
import { CisComponent } from './components/results/cis/cis.component';


const routes: Routes = [{
  path:'home-cat',
  component: HomeComponent
},
{
  path: 'information',
  component: FormsComponent
},
{
  path: 'results',
  component: ResultsComponent
},

{
  path:'dashboard',
  component: DashboardComponent
},

{
  path:'CISTop18',
  component: CisComponent

},


{
  path:'**',
  redirectTo: 'home-cat'
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
