import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatRoutingModule } from './cat-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsComponent } from './components/forms/forms.component';
import { ModalComponent } from './pages/modal/modal.component';
import { HelpComponent } from './pages/modal/help/help.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    FormsComponent,
    ModalComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CatModule { }
