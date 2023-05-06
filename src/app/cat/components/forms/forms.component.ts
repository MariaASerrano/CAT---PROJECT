import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpComponent } from '../../pages/modal/help/help.component';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import { EmpresaService } from 'src/app/services/empresa.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formularioInicial: FormGroup = new FormGroup({});
  formularioPreguntas: FormGroup = new FormGroup({});
  progress = 0;
  totalQuestions = 18;
  answeredQuestions = 0;

  totalWidth = 1580; /* adjust the total width as needed */
  imageWidth = 150; /* adjust the width of the image as needed */
  preguntas = [];
  nist: any;
  orden: any = [];

  calculateImagePosition() {
    const progressWidth = (this.progress * this.totalWidth) / 100;
    const imagePosition =
      progressWidth > this.imageWidth ? progressWidth - this.imageWidth : 0;
    return imagePosition;
  }

  updateProgress(key: string, value: any, progress: boolean = true) {
    this.formularioPreguntas.controls[key].setValue(value);
    if (progress) {
      this.answeredQuestions++;
      this.progress = (this.answeredQuestions / this.totalQuestions) * 100;
    }
  }

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private empresaService: EmpresaService,
    private respuestaService: RespuestaService,
    private preguntaService: PreguntaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formularioInicial = this.fb.group({
      nombreEmpresa: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      nroSedes: [
        '',
        [Validators.required, Validators.min(1), Validators.maxLength(5)],
      ],
      dependencia: [
        '',
        [Validators.required, Validators.min(1), Validators.maxLength(3)],
      ],
      nroEmpleados: [
        '',
        [Validators.required, Validators.min(1), Validators.maxLength(10)],
      ],
      ingreso: [
        '',
        [Validators.required, Validators.min(6), Validators.maxLength(20)],
      ],
      tiempoOpera: ['', [Validators.required]],
    });
    this.formularioPreguntas = this.fb.group({
      '64568db13888222b0138f614': ['', [Validators.required]],
      '64568db13888222b0138f615': ['', [Validators.required]],
      '64568db13888222b0138f616': ['', [Validators.required]],
      '64568db13888222b0138f617': ['', [Validators.required]],
      '64568db13888222b0138f618': ['', [Validators.required]],
      '64568db13888222b0138f619': ['', [Validators.required]],
      '64568db13888222b0138f61a': ['', [Validators.required]],
      '64568db13888222b0138f61b': ['', [Validators.required]],
      '64568db13888222b0138f61c': ['', [Validators.required]],
      '64568db13888222b0138f61d': ['', [Validators.required]],
      '64568db13888222b0138f61e': ['', [Validators.required]],
      '64568db13888222b0138f61f': ['', [Validators.required]],
      '64568db13888222b0138f620': ['', [Validators.required]],
      '64568db13888222b0138f621': ['', [Validators.required]],
      '64568db13888222b0138f622': ['', [Validators.required]],
      '64568db13888222b0138f623': ['', [Validators.required]],
      '64568db13888222b0138f624': ['', [Validators.required]],
      '64568db13888222b0138f625': ['', [Validators.required]],
      ///
      '64568db13888222b0138f626': ['', [Validators.required]],
      '64568db13888222b0138f627': ['', [Validators.required]],
      '64568db13888222b0138f628': ['', [Validators.required]],
      '64568db13888222b0138f629': ['', [Validators.required]],
      '64568db13888222b0138f62a': ['', [Validators.required]],
      '64568db13888222b0138f62b': ['', [Validators.required]],
    });
    this.preguntaService.Get().subscribe((preguntas) => {
      this.preguntas = preguntas;

      this.nist = preguntas.reduce((acc: any, item: any) => {
        if (item.nist === null) {
          return acc; // Skip null nist values
        }
        const nistValue = item.nist;
        if (!acc.hasOwnProperty(nistValue)) {
          acc[nistValue] = [];
        }
        acc[nistValue].push(item);
        return acc;
      }, {});
    });
  }

  submitForm() {
    const valuesEmpresa = this.formularioInicial.value;
    this.empresaService.Actualizar(valuesEmpresa).subscribe((result) => {});

    const valuesRespuesta = this.formularioPreguntas.value;

    const preguntaRequests = Object.keys(valuesRespuesta).map((idRespuesta) => {
      return this.preguntaService.GetId(idRespuesta);
    });

    forkJoin(preguntaRequests).subscribe((preguntas) => {
      for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];
        const idRespuesta = Object.keys(valuesRespuesta)[i];
        let order = 0;
        if (!!pregunta.nist) {
          order =
            (valuesRespuesta[idRespuesta] * pregunta.tipoAtaque.length) /
            this.nist[pregunta.nist as string].length;
          this.orden.push({ id: idRespuesta, order: order });
        }
      }
      this.orden = this.orden.sort((a: any, b: any) => a.order - b.order);
      for (let i = 0; i < preguntas.length; i++) {
        const idRespuesta = Object.keys(valuesRespuesta)[i];
        const index = this.orden.findIndex((or: any) => {
          return or.id == idRespuesta;
        });

        const respuestaData = {
          valor: valuesRespuesta[idRespuesta],
          idPregunta: idRespuesta,
          orden: index >= 0 ? index + 1 : undefined,
        };
        this.respuestaService.New(respuestaData).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      }
    });
  }

  campoNoValido(campo: string): boolean {
    const control = this.formularioInicial.get(campo);
    return (
      control?.invalid &&
      (control?.dirty || control?.touched) &&
      (control.errors?.['maxlength'] || control.errors?.['maxLength'])
    );
  }

  guardar() {
    if (this.formularioInicial.invalid) {
      this.formularioInicial.markAllAsTouched();
      return;
    }
  }
  mostrarGeneral = true;
  mostrarcuestionario = false;
  mostrarcuestionario2 = false;
  mostrarcuestionario3 = false;
  mostrarransom = false;

  showGen() {
    this.mostrarGeneral = true;
    this.mostrarcuestionario = false;
    this.mostrarcuestionario2 = false;
    this.mostrarcuestionario3 = false;
    this.mostrarransom = false;
  }

  showCuest() {
    this.mostrarGeneral = false;
    this.mostrarcuestionario = true;
    this.mostrarcuestionario2 = false;
    this.mostrarcuestionario3 = false;
    this.mostrarransom = false;
  }

  showCuest2() {
    this.mostrarGeneral = false;
    this.mostrarcuestionario = false;
    this.mostrarcuestionario2 = true;
    this.mostrarcuestionario3 = false;
    this.mostrarransom = false;
  }

  showCuest3() {
    this.mostrarGeneral = false;
    this.mostrarcuestionario = false;
    this.mostrarcuestionario2 = false;
    this.mostrarcuestionario3 = true;
    this.mostrarransom = false;
  }

  showCuestRansom() {
    this.mostrarGeneral = false;
    this.mostrarcuestionario = false;
    this.mostrarcuestionario2 = false;
    this.mostrarcuestionario3 = false;
    this.mostrarransom = true;
  }

  showHelp() {
    this.dialog.open(HelpComponent);
  }
}
