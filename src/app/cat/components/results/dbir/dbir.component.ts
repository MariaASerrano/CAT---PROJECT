import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';

export interface AttackExpo {
  categoria: string[];
  exposicion: number;
  code: string;
}

@Component({
  selector: 'app-dbir',
  templateUrl: './dbir.component.html',
  styleUrls: ['./dbir.component.scss'],
})
export class DBIRComponent implements OnInit {
  //radial bar
  series_bar: ApexNonAxisChartSeries = [];
  chart_bar: ApexChart = { type: 'radialBar' };
  labels_bar: string[] = [];
  plotOptions_bar: ApexPlotOptions = {};
  fill_bar: ApexFill = {};
  stroke_bar: ApexStroke = {};
  preguntas: any[] = [];
  respuestas: any[] = [];

  ELEMENT_DATA: AttackExpo[] = [
    {
      categoria: ['Ataque básicos a aplicaciones web'],
      exposicion: 0,
      code: 'BWAA',
    },
    { categoria: ['Intrusión física'], exposicion: 0, code: 'SI' },
    { categoria: ['Errores Miscelaneos'], exposicion: 0, code: 'MISC' },
  ];

  attacks = ['BWAA', 'SI', 'MISC'];

  exposicion: any = {};
  exposicionQuantity: any = {};

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
      for (let respuesta of this.respuestas) {
        const preguntaAux = this.preguntas.find(
          (pregunta: any) => pregunta._id == respuesta.idPregunta
        );
        for (let pregunta of preguntaAux.tipoAtaque) {
          const ElementAux = this.ELEMENT_DATA.find(
            (elemento: any) => elemento.code == pregunta
          );
          if (ElementAux) {
            ElementAux.exposicion += respuesta.valor;
          }
        }
      }

      this.ELEMENT_DATA[0].exposicion = Math.floor(
        this.ELEMENT_DATA[0].exposicion / 5
      );
      this.ELEMENT_DATA[1].exposicion = Math.floor(
        this.ELEMENT_DATA[1].exposicion / 17
      );
      this.ELEMENT_DATA[2].exposicion = Math.floor(
        this.ELEMENT_DATA[2].exposicion / 13
      );

      this.exposicion = this.series_bar = [
        (this.ELEMENT_DATA[0].exposicion +
          this.ELEMENT_DATA[1].exposicion +
          this.ELEMENT_DATA[2].exposicion) /
          3,
      ];
    });
    this.initializeChartOptions();
  }
  displayedColumns: string[] = ['categoria', 'exposicion'];
  //For improvement
  dataSource = this.ELEMENT_DATA;

  private initializeChartOptions(): void {
    //radial bar
    this.series_bar = [80]; //aquí va el porcentaje de exposicion
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
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['red'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      }),
      (this.stroke_bar = {
        lineCap: 'round',
      }),
      (this.labels_bar = ['Nivel de exposición']);
  }
}
