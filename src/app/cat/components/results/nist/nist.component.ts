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

export interface NISTExpo {
  categoria: string[];
  exposicion: number;

}

const ELEMENT_DATA: NISTExpo[] = [
  { categoria: ['Identificar'], exposicion: 50 },
  { categoria: ['Proteger'], exposicion: 60 },
  { categoria: ['Detectar'], exposicion: 40 },
  { categoria: ['Responder'], exposicion: 73 },
  { categoria: ['Recuperar'], exposicion: 83 },

];

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

  constructor() {}

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  displayedColumns: string[] = ['categoria', 'exposicion'];
  //For improvement
  dataSource = ELEMENT_DATA;

  private initializeChartOptions(): void {
    this.title = {
      text: 'Nivel de Madurez según NIST CSF',
    };
    this.series = [
      {
        name: 'NIST',
        data: [15, 20, 45, 10, 10],
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
this.series_bar = [50]; //aquí va el porcentaje de madurez
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
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["yellow"],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  }),
  (this.stroke_bar = {
    lineCap: 'round',
  }),
  (this.labels_bar = ['Nivel de madurez']);
  }
}
