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
import { EmpresaService } from 'src/app/services/empresa.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';

export interface NISTExpo {
  parametro: string[];
  valor: number;
}

@Component({
  selector: 'app-ciberriesgo',
  templateUrl: './ciberriesgo.component.html',
  styleUrls: ['./ciberriesgo.component.scss'],
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
  preguntas: any[] = [];
  respuestas: any[] = [];
  empresa: any;

  ELEMENT_DATA: NISTExpo[] = [
    { parametro: ['Revenue del último año (RN)'], valor: 4000000 },
    {
      parametro: ['Porcentaje de dependencia tecnológica del negocio (%DT)'],
      valor: 98,
    },
  ];

  constructor(
    private preguntaService: PreguntaService,
    private respuestaService: RespuestaService,
    private localStorageService: LocalStorageService,
    private empresaService: EmpresaService
  ) {}

  ngOnInit(): void {
    this.initializeChartOptions();
    this.empresaService
      .GetId(this.localStorageService.get('authToken') as string)
      .subscribe((empresa) => {
        this.empresa = empresa;
        console.log(empresa);
        this.ELEMENT_DATA[0].valor = empresa.ingreso;
        this.ELEMENT_DATA[1].valor = empresa.dependencia;
        const valueDay = empresa.dependencia * empresa.ingreso;
        this.series = [
          {
            name: 'Pérdida',
            data: [valueDay, 3 * valueDay, 5 * valueDay, 10 * valueDay],
          },
        ];
      });
  }
  displayedColumns: string[] = ['parametro', 'valor'];
  //For improvement
  dataSource = this.ELEMENT_DATA;
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