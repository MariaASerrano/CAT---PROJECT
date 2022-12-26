import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [{
  path:'home-cat',
  component: HomeComponent
},
{
  path: 'informacion',
  component: FormsComponent
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
