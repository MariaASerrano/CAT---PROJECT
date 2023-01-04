import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HelpComponent } from '../../pages/modal/help/help.component';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  formularioInicial: FormGroup =new FormGroup ({}); 
  progress = 0;
  totalQuestions = 18;
  answeredQuestions = 0;

totalWidth = 1470; /* adjust the total width as needed */
imageWidth = 150; /* adjust the width of the image as needed */

calculateImagePosition() {
  const progressWidth = this.progress * this.totalWidth / 100;
  const imagePosition = progressWidth > this.imageWidth ? progressWidth - this.imageWidth : 0;
  return imagePosition;
  }
 
  selectedOption: string;

  updateSelectedOption(option: string) {
    this.selectedOption = option;
  }
 
  updateProgress() {
    this.answeredQuestions++;
    this.progress = (this.answeredQuestions / this.totalQuestions) * 100;
  }


 constructor(private dialog: MatDialog, private fb: FormBuilder, private currencyPipe: CurrencyPipe)
  {
  this.selectedOption = '';

  }

  ngOnInit(): void {
    
    this.formularioInicial = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      sedes:['', [Validators.required, Validators.min(1),Validators.maxLength(5)]],
      depen:['', [Validators.required, Validators.min(1),Validators.maxLength(3)]],
      empleados:['', [Validators.required, Validators.min(1), Validators.maxLength(10)]],
      ganancia: ['', [Validators.required, Validators.min(6),Validators.maxLength(20)]],
      user:['', [ Validators.required, Validators.minLength(3),Validators.maxLength(100)]],
      email:['', [Validators.required, Validators.email,Validators.maxLength(100)]]
    })
  }

  campoNoValido(campo:string){
    return this.formularioInicial.controls[campo].errors && this.formularioInicial.controls[campo].touched;
  }

  guardar(){
    if(this.formularioInicial.invalid){
      this.formularioInicial.markAllAsTouched();
      return
    }
  }
  mostrarGeneral=true;
  mostrarcuestionario=false;
  mostrarcuestionario2=false;
  mostrarcuestionario3=false;
  mostrarcuestionario4=false;
  mostrarcuestionario5=false;
  mostrarransom=false;

  showGen() {
    this.mostrarGeneral=true;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
    this.mostrarransom=false;
  }

  showCuest() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=true;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
    this.mostrarransom=false;
  }

  showCuest2() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=true;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
    this.mostrarransom=false;
  }

  showCuest3() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=true;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
    this.mostrarransom=false;
  }

  showCuest4() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=true;
    this.mostrarcuestionario5=false;
    this.mostrarransom=false;
  }

  showCuest5() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=true;
    this.mostrarransom=false;
  }
  showCuestRansom() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
    this.mostrarransom=true;
  }


  showHelp() {
    this.dialog.open(HelpComponent)
  }
}
