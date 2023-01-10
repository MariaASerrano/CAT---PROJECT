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
@NgModule({
  declarations: [
    HomeComponent,
    FormsComponent,
    ModalComponent,
    HelpComponent,
    FormsOptionComponent,
    ResultsComponent,
    StartComponent,
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers:[
    CurrencyPipe
  ]

})
export class CatModule { }
