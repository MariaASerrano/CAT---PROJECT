import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
} from 'ng-apexcharts';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';

//For table
export interface CISExpo {
  control: string[];
  exposicion: number;
}
//Improvent controls
const ELEMENT_DATA: CISExpo[] = [
  {
    control: ['Inventario y control de los activos de la empresa'],
    exposicion: 23,
  },
];
const ELEMENT_DATA2: CISExpo[] = [
  { control: ['Protección de datos'], exposicion: 15 },
];
const ELEMENT_DATA3: CISExpo[] = [
  { control: ['Gestión de cuentas'], exposicion: 5 },
];
//Good controls
const GOOD_DATA: CISExpo[] = [
  {
    control: ['Protecciones de correo electrónico y navegador web'],
    exposicion: 50,
  },
];
const GOOD_DATA2: CISExpo[] = [
  { control: ['Gestión del control de acceso'], exposicion: 56 },
];
const GOOD_DATA3: CISExpo[] = [
  { control: ['Defensas contra malware'], exposicion: 65 },
];

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.scss'],
})
export class CisComponent implements OnInit {
  series: ApexNonAxisChartSeries = [];
  chart: ApexChart = { type: 'radialBar' };
  labels: string[] = [];
  plotOptions: ApexPlotOptions = {};
  fill: ApexFill = {};
  stroke: ApexStroke = {};
  preguntas: any[] = [];
  respuestas: any[] = [];
  cisTotal = 0;
  nist: any = {};
  nistQuantity: any;
  constructor(
    private preguntaService: PreguntaService,
    private respuestaService: RespuestaService,
    private localStorageService: LocalStorageService
  ) {}

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
        this.cisTotal = Math.floor(
          this.respuestas.reduce((acc: any, obj: any) => acc + obj.valor, 0) /
            this.respuestas.length
        );
      this.series = [this.cisTotal];
    });
    this.initializeChartOptions();
}
  displayedColumns: string[] = ['control', 'exposicion'];
  //For improvement
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  dataSource3 = ELEMENT_DATA3;
  //Good controls
  dataSource4 = GOOD_DATA;
  dataSource5 = GOOD_DATA2;
  dataSource6 = GOOD_DATA3;

  private initializeChartOptions(): void {
    this.series = [0];
    (this.chart = {
      height: 300,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    }),
      (this.plotOptions = {
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
              color: '#888',
              fontSize: '20px',
              fontFamily:
                "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            },
          },
        },
      }),
      (this.fill = {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      }),
      (this.stroke = {
        lineCap: 'round',
      }),
      (this.labels = ['Nivel de madurez']);
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
