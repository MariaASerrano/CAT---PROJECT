import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatRoutingModule } from './cat-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsComponent } from './components/forms/forms.component';
import { ModalComponent } from './pages/modal/modal.component';
import { HelpComponent } from './pages/modal/help/help.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { FormsOptionComponent } from './components/forms-option/forms-option.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormsComponent,
    ModalComponent,
    HelpComponent,
    FormsOptionComponent,
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers:[
    CurrencyPipe,
  ]
})
export class CatModule { }
