import { Component, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
@Component({
  selector: 'app-ransomware',
  templateUrl: './ransomware.component.html',
  styleUrls: ['./ransomware.component.scss'],
})

export class RansomwareComponent implements OnInit {
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

  //radial bar
  series_bar: ApexNonAxisChartSeries = [];
  chart_bar: ApexChart = { type: 'radialBar' };
  labels_bar: string[] = [];
  plotOptions_bar: ApexPlotOptions = {};
  fill_bar: ApexFill = {};
  stroke_bar: ApexStroke = {};
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
    this.initializeChartOptions();
    this.preguntaService.Get().subscribe((preguntas) => {
      this.preguntas = preguntas;
    });
    this.respuestaService.Get().subscribe((respuestas) => {
      this.respuestas = respuestas
        .filter(
          (respuesta: any) =>
            respuesta.idEmpresa === this.localStorageService.get('authToken')
        )
        .filter((respuesta: any) => !respuesta.orden);
        
        this.series_bar = [this.respuestas.reduce((acc, obj) => acc + obj.valor, 0)/6]; 
    });
  }
  private initializeChartOptions(): void {
    //radial bar
    this.series_bar = [0]; //aquí va el porcentaje de preparación
    (this.chart_bar = {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    }),
      (this.plotOptions_bar = {
        radialBar: {
          startAngle: -135,
          endAngle: 225,  
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: 'black',
              fontSize: '20px',
              fontFamily:
                "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: '#black',
              fontSize: '40px',
              show: true,
            },
          },
        },
      }),
      (this.fill_bar = {
        type: 'stroke',
      }),
      (this.stroke_bar = {
        lineCap: 'round',
      }),
      (this.labels_bar = ['Preparación']);
  }
}
