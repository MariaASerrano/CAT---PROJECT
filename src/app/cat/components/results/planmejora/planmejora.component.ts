import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
@Component({
  selector: 'app-planmejora',
  templateUrl: './planmejora.component.html',
  styleUrls: ['./planmejora.component.scss'],
})
export class PlanmejoraComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  isLinear = false;
  stepperOrientation: Observable<StepperOrientation>;
  preguntas: any[] = [];
  respuestas: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private preguntaService: PreguntaService,
    private respuestaService: RespuestaService,
    private localStorageService: LocalStorageService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.preguntaService.Get().subscribe((preguntas) => {
      this.preguntas = preguntas;
    });
    this.respuestaService.Get().subscribe((respuestas) => {
      this.respuestas = respuestas
        .filter(
          (respuesta: any) =>
            respuesta.idEmpresa === this.localStorageService.get('authToken')
        )
        .filter((respuesta: any) => !!respuesta.orden)
        .sort((a: any, b: any) => a.orden - b.orden);
    });
  }

  public getPregunta(index: number) {
    return (
      this.preguntas.find(
        (pregunta: any) => pregunta._id === this.respuestas[index]?.idPregunta
      ) ?? undefined
    );
  }

  public getRespuesta(pregunta: any) {
    if (pregunta) {
      return this.respuestas.find(
        (respuesta: any) => respuesta.idPregunta == pregunta._id
      );
    }
    return undefined;
  }
}
