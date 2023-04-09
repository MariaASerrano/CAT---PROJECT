import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { ResultsComponent } from './components/results/results.component';
import { DashboardComponent } from './components/results/dashboard/dashboard.component';
import { CisComponent } from './components/results/cis/cis.component';
import { CiberriesgoComponent } from './components/results/ciberriesgo/ciberriesgo.component';
import { DBIRComponent } from './components/results/dbir/dbir.component';
import { NISTComponent } from './components/results/nist/nist.component';
import { PlanmejoraComponent } from './components/results/planmejora/planmejora.component';
import { RansomwareComponent } from './components/results/ransomware/ransomware.component';
import { IdGuard, IdGuardReverse } from '../services/guard.service';
import { InfoCatComponent } from './pages/info-cat/info-cat.component';

const routes: Routes = [
  {
    path: 'home-cat',
    component: HomeComponent,
    canActivate: [IdGuardReverse],
  },
  {
    path: 'information',
    component: FormsComponent,
    canActivate: [IdGuard],
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'CISTop18',
    component: CisComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'hipotesis',
    component: CiberriesgoComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'pattern-attack',
    component: DBIRComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'nist-maturity',
    component: NISTComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'ransomware-readiness',
    component: RansomwareComponent,
    canActivate: [IdGuard],
  },

  {
    path: 'roadmap',
    component: PlanmejoraComponent,
    canActivate: [IdGuard],
  },
  {
    path: 'info-cat',
    component: InfoCatComponent,
    canActivate: [IdGuard],
  },

  {
    path: '**',
    redirectTo: 'home-cat',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatRoutingModule {}
