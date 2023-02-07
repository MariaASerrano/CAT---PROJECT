import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";

//For table
export interface CISExpo {
  control: string[];
  exposicion: number;
}
//Improvent controls
const ELEMENT_DATA: CISExpo[] = [
  { control: ['Inventario y control de los activos de la empresa'], exposicion: 23 },
];
const ELEMENT_DATA2: CISExpo[] = [
  { control: ['Protección de datos'], exposicion: 15 },
];
const ELEMENT_DATA3: CISExpo[] = [
  { control: ['Gestión de cuentas'], exposicion: 5 },
];
//Good controls
const GOOD_DATA: CISExpo[] = [
  { control: ['Protecciones de correo electrónico y navegador web'], exposicion: 50 },
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
  styleUrls: ['./cis.component.scss']
})

export class CisComponent implements OnInit {
  series: ApexNonAxisChartSeries = [];
  chart: ApexChart = {type: 'radialBar'};
  labels: string[] = [];
  plotOptions: ApexPlotOptions = {};
  fill: ApexFill = {};
  stroke: ApexStroke = {};
    constructor() { }

  ngOnInit(): void {
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
    this.series = [80];
    this.chart = {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: true
      }
    },
    this.plotOptions = {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "20px",
            fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
          },
          value: {
            formatter: function(val) {
              return parseInt(val.toString(), 10).toString();
            },
            color: "#111",
            fontSize: "36px",
            show: true
          }
        }
      }
    },
    this.fill = {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    this.stroke= {
      lineCap: "round"
    },
    this.labels= ["Nivel de madurez"]
  };
}  

