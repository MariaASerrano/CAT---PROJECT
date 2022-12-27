import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { HelpComponent } from '../../pages/modal/help/help.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formularioInicial: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    sedes:['', [Validators.required, Validators.min(1)]],
    empleados:['', [Validators.required, Validators.min(1)]],
    ganancia:['', [Validators.required, Validators.min(1)]],
    user:['', [ Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]]
  })

  formularioCheck: FormGroup = this.fb.group({
    operacion: ['LV', [Validators.requiredTrue]]
  })


 constructor(private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
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
