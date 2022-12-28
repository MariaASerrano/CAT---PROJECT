import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { HelpComponent } from '../../pages/modal/help/help.component';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

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
  // Define a FormControl for the currency field
  currencyControl = new FormControl('', [
    Validators.pattern('^\d+(\.\d{1,2})?$'), // Allow only numeric characters and a decimal point
    Validators.required, // Make the field required
  ]);
 
  
  updateProgress() {
    this.answeredQuestions++;
    this.progress = (this.answeredQuestions / this.totalQuestions) * 100;
  }

  formularioInicial: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    sedes:['', [Validators.required, Validators.min(1)]],
    empleados:['', [Validators.required, Validators.min(1)]],
    ganancia: ['', [Validators.required, Validators.min(6)]],
    user:['', [ Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]]
  })

 constructor(private dialog: MatDialog, private fb: FormBuilder,  private currencyPipe: CurrencyPipe) {
  this.selectedOption = '';  
}

  ngOnInit(): void {

  }
/*   setCurrency(value: string) {
    console.log(`Setting currency value to ${value}`);
    if (this.currencyControl) {
      this.currencyControl.setValue(value);
    }
  } */

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

  showGen() {
    this.mostrarGeneral=true;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
  }

  showCuest() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=true;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
  }

  showCuest2() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=true;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
  }

  showCuest3() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=true;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=false;
  }

  showCuest4() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=true;
    this.mostrarcuestionario5=false;
  }

  showCuest5() {
    this.mostrarGeneral=false;
    this.mostrarcuestionario=false;
    this.mostrarcuestionario2=false;
    this.mostrarcuestionario3=false;
    this.mostrarcuestionario4=false;
    this.mostrarcuestionario5=true;
  }

  showHelp() {
    this.dialog.open(HelpComponent)
  }
}
