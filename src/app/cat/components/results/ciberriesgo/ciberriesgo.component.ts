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
  parametro: string[];
  valor: number;

}

const ELEMENT_DATA: NISTExpo[] = [
  { parametro: ['Revenue del último año (RN)'], valor: 4000000 },
  { parametro: ['Porcentaje de dependencia tecnológica del negocio (%DT)'], valor: 98 },
  { parametro: ['Factor de exposición en porcentaje (%FE)'], valor: 40 },
  { parametro: ['Efectividad de la estrategia actual de ciberseguridad (ECS)'], valor: 0 },
];


@Component({
  selector: 'app-ciberriesgo',
  templateUrl: './ciberriesgo.component.html',
  styleUrls: ['./ciberriesgo.component.scss']
})
export class CiberriesgoComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }
  displayedColumns: string[] = ['parametro', 'valor'];
  //For improvement
  dataSource = ELEMENT_DATA;
  private initializeChartOptions(): void {
    this.title = {
      text: 'Pérdida exponencial en días',
    };
    this.series = [
      {
        name: 'Pérdida',
        data: [15000000, 45000000, 75000000, 150000000],
      },
    ];

    this.chart = {
      height: 300,
      width: 650,
      type: 'bar',
    };

    this.xaxis = {
      categories: ['Un día', 'Tres días', 'Cinco días', 'Diez días'],
      labels: {
        style: {
          colors: ['black', 'black', 'black', 'black'],
          fontSize: '12px',
          fontFamily: 'Franklin Gothic Medium',
        },
      },
    };

    this.colors = ['#FE6B4C', '#FF5632', '#FF4A24', '#FF3C13', '#FE2D00'];

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
  }
}
