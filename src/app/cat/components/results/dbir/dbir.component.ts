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

export interface AttackExpo {
  categoria: string[];
  exposicion: number;

}

const ELEMENT_DATA: AttackExpo[] = [
  { categoria: ['Ataque básicos a aplicaciones web'], exposicion: 50 },
  { categoria: ['Intrusión física'], exposicion: 60 },
  { categoria: ['Ingeniería social'], exposicion: 40 },
];

@Component({
  selector: 'app-dbir',
  templateUrl: './dbir.component.html',
  styleUrls: ['./dbir.component.scss']
})
export class DBIRComponent implements OnInit {

  
  //radial bar
  series_bar: ApexNonAxisChartSeries = [];
  chart_bar: ApexChart = { type: 'radialBar' };
  labels_bar: string[] = [];
  plotOptions_bar: ApexPlotOptions = {};
  fill_bar: ApexFill = {};
  stroke_bar: ApexStroke = {};

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }
  displayedColumns: string[] = ['categoria', 'exposicion'];
  //For improvement
  dataSource = ELEMENT_DATA;

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
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["red"],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  }),
  (this.stroke_bar = {
    lineCap: 'round',
  }),
  (this.labels_bar = ['Nivel de exposición']);
   
  }
}
