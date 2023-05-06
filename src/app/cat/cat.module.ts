import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CatRoutingModule } from './cat-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsComponent } from './components/forms/forms.component';
import { ModalComponent } from './pages/modal/modal.component';
import { HelpComponent } from './pages/modal/help/help.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormsOptionComponent } from './components/forms-option/forms-option.component';
import { ResultsComponent } from './components/results/results.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StartComponent } from './pages/modal/start/start.component';
import { HeaderComponent } from './components/results/header/header.component';
import { SideNavComponent } from './components/results/side-nav/side-nav.component';
import { MainComponent } from './components/results/main/main.component';
import { DashboardComponent } from './components/results/dashboard/dashboard.component';
import { CisComponent } from './components/results/cis/cis.component';
import { CiberriesgoComponent } from './components/results/ciberriesgo/ciberriesgo.component';
import { DBIRComponent } from './components/results/dbir/dbir.component';
import { NISTComponent } from './components/results/nist/nist.component';
import { PlanmejoraComponent } from './components/results/planmejora/planmejora.component';
import { RansomwareComponent } from './components/results/ransomware/ransomware.component';
import { InfoCatComponent } from './pages/info-cat/info-cat.component';
import { LogoutComponent } from './pages/modal/logout/logout.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormsComponent,
    ModalComponent,
    HelpComponent,
    FormsOptionComponent,
    ResultsComponent,
    StartComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    DashboardComponent,
    CisComponent,
    CiberriesgoComponent,
    DBIRComponent,
    NISTComponent,
    PlanmejoraComponent,
    RansomwareComponent,
    InfoCatComponent,
    LogoutComponent,
    ],
  imports: [
    CommonModule,
    CatRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [CurrencyPipe],
})
export class CatModule {}
