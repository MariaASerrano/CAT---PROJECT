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
import { elementAt } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';

export interface NISTExpo {
  categoria: string[];
  exposicion: number;
  code: string;
}



@Component({
  selector: 'app-nist',
  templateUrl: './nist.component.html',
  styleUrls: ['./nist.component.scss'],
})
export class NISTComponent implements OnInit {
  //bar series
  series: ApexAxisChartSeries = [];
  chart: ApexChart = { type: 'bar' };
  title: ApexTitleSubtitle = {};
  yaxis: ApexYAxis = {};
  xaxis: ApexXAxis = {};
  colors: string[] = [];
  plotOptions: ApexPlotOptions = {};
  dataLabels: ApexDataLabels = {};
  legend: ApexLegend = {};
  //radial bar
  series_bar: ApexNonAxisChartSeries = [];
  chart_bar: ApexChart = { type: 'radialBar' };
  labels_bar: string[] = [];
  plotOptions_bar: ApexPlotOptions = {};
  fill_bar: ApexFill = {};
  stroke_bar: ApexStroke = {};
  preguntas: any[] = [];
  respuestas: any[] = [];
  nist: any = {};
  nistQuantity: any;

  constructor(
    private preguntaService: PreguntaService,
    private respuestaService: RespuestaService,
    private localStorageService: LocalStorageService
  ) {}
  ELEMENT_DATA: NISTExpo[] = [
    { categoria: ['Identificar'], exposicion: 0, code: 'ID' },
    { categoria: ['Proteger'], exposicion: 0, code: 'PRO' },
    { categoria: ['Detectar'], exposicion: 0, code: 'DET' },
    { categoria: ['Responder'], exposicion: 0, code: 'RES' },
    { categoria: ['Recuperar'], exposicion: 0, code: 'REC' },
  ];
  ngOnInit(): void {
    this.initializeChartOptions();
    this.initializeChartOptions();
    this.preguntaService.Get().subscribe((preguntas) => {
      this.preguntas = preguntas;
      this.nistQuantity = preguntas.reduce((acc: any, item: any) => {
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
        if (preguntaAux) {
          const nistAux = preguntaAux.nist;
          this.nist[nistAux] =
            this.nist[nistAux] ??
            0 +
              (preguntaAux.tipoAtaque.length * respuesta.valor) /
                this.nistQuantity[preguntaAux.nist].length;
        }
      }

      
      this.ELEMENT_DATA.map((element) => {
        element.exposicion = Math.floor(this.nist[element.code]);
      });
      this.series = [
        {
          name: 'NIST',
          data: this.ELEMENT_DATA.map((element)=>element.exposicion)
        },
      ];
      
      this.series_bar = [
        Object.keys(this.nist).reduce(
          (acc: any, obj: any) => acc + this.nist[obj],
          0
        ) / 5,
      ];
    });
  }

  displayedColumns: string[] = ['categoria', 'exposicion'];
  //For improvement
  dataSource = this.ELEMENT_DATA;

  private initializeChartOptions(): void {
    this.title = {
      text: 'Nivel de Madurez según NIST CSF',
    };
    this.series = [
      {
        name: 'NIST',
        data: [],
      },
    ];

    this.chart = {
      height: 500,
      width: 800,
      type: 'bar',
    };

    this.xaxis = {
      categories: ['ID', 'PR', 'DET', 'RES', 'REC'],
      labels: {
        style: {
          colors: ['#02B2FF', '#8102FF', '#FFD102', '#FF1502', '#79FF02'],
          fontSize: '12px',
          fontFamily: 'Franklin Gothic Medium',
        },
      },
    };

    this.colors = ['#02B2FF', '#8102FF', '#FFD102', '#FF1502', '#79FF02'];

    this.plotOptions = {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    };
    this.dataLabels = {
      enabled: true,
    };
    this.legend = {
      show: false,
    };

    //radial bar
    this.series_bar = [0]; //aquí va el porcentaje de madurez
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
          gradientToColors: ['yellow'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      }),
      (this.stroke_bar = {
        lineCap: 'round',
      }),
      (this.labels_bar = ['Nivel de madurez']);
  }
}
