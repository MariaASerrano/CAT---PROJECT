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
  ApexFill,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface DBIRExpo {
  posicion: number;
  nombre: string[];
  exposicion: number;
}

const ELEMENT_DATA: DBIRExpo[] = [
  { posicion: 1, nombre: ['Ataques básicos a sitios web'], exposicion: 43 },
  { posicion: 2, nombre: ['Intrusión al sistema'], exposicion: 30 },
  { posicion: 3, nombre: ['Errores misceláneos'], exposicion: 27 },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['posicion', 'nombre', 'exposicion'];
  dataSource = ELEMENT_DATA;

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
  stepperOrientation: Observable<StepperOrientation>;

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
  //pie series
  pieseries: ApexNonAxisChartSeries = [];
  piechart: ApexChart = { type: 'donut' };
  fill: ApexFill = {};
  piedataLabels: ApexDataLabels = {};
  pietitle: ApexTitleSubtitle = {};
  pieplotOptions: ApexPlotOptions = {};
  labels: any;

    //pie series RRA
    pieseriesRRA: ApexNonAxisChartSeries = [];
    piechartRRA: ApexChart = { type: 'donut' };
    fillRRA: ApexFill = {};
    piedataLabelsRRA: ApexDataLabels = {};
    pietitleRRA: ApexTitleSubtitle = {};
    pieplotOptionsRRA: ApexPlotOptions = {};
    labelsRRA: any;
  //TABLE

  constructor( private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver ) { 
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.initializeChartOptions();
  }
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

    this.pieseriesRRA = [60, 40];
    this.piechartRRA = {
      width: 380,
      type: 'pie',
    }
    this.labelsRRA = [
      'Exposición',
      'Efectividad'
    ];
    this.pietitleRRA = {
      text: 'Ransomware Readiness Assessment',
    };
    this.fillRRA = {
      type: 'gradient',
    };
    this.piedataLabelsRRA = {
      enabled: false,
    };
    //pie series
    this.pieseries = [4, 5, 6, 2, 1];
    this.piechart = {
      width: 380,
      type: 'donut',
    };
    this.labels = [
      'Inexistente',
      'Reactivo',
      'Algunas veces',
      'Proactivo',
      'Anticipado',
    ];
    this.pieplotOptions = {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: '40px',
              fontFamily: 'Franklin Gothic Medium',
              offsetY: 20,
            },
            name: {
              fontFamily: 'Franklin Gothic Medium',
              fontSize: '18px',
              offsetY: -10,
            },
          },
        },
      },
    };

    this.fill = {
      type: 'gradient',
    };
    this.piedataLabels = {
      enabled: false,
    };
    this.pietitle = {
      text: 'Nivel de Madurez según CIS Top 18',
    };
  }
}
