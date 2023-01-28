import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexTitleSubtitle, ApexChart, ApexYAxis, ApexLegend, ApexXAxis, ApexPlotOptions, ApexDataLabels, ApexFill, ApexNonAxisChartSeries } from 'ng-apexcharts';

export interface DBIRExpo {
  name: string[];
  position: number;
  weight: number;
}


const ELEMENT_DATA: DBIRExpo[] = [
  {position: 1, name: ['Ataques básicos a sitios web'], weight: 43},
  {position: 2, name: ['Intrusión al sistema'], weight: 30},
  {position: 3, name: ['Errores misceláneos'], weight: 27},
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

displayedColumns: string[] = ['position', 'name', 'weight'];
dataSource = ELEMENT_DATA;

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
  piechart: ApexChart = { type: 'donut'};
  fill: ApexFill = {}
  piedataLabels: ApexDataLabels = {};
  pietitle: ApexTitleSubtitle = {};
  pieplotOptions: ApexPlotOptions = {};
  labels:any;
//TABLE

  constructor() {}

  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions():void {
    this.title = {
      text: 'Nivel de Madurez según NIST CSF'
    };
    this.series = [{
      name: 'NIST',
      data: [15,20,45,10,10],
    }];

    this.chart = {
      type: 'bar',
    };

    this.xaxis = {
      categories: ['ID', 'PR', 'DET', 'RES', 'REC'],
      labels: {
        style: {
          colors: [
            "#02B2FF", "#8102FF", '#FFD102', '#FF1502', '#79FF02'],
          fontSize: "12px",
          fontFamily: 'Franklin Gothic Medium',
        }
      }
    };
    
    this.colors = ["#02B2FF", "#8102FF", '#FFD102', '#FF1502', '#79FF02'];

    this.plotOptions = {
      bar: {
        columnWidth: "45%",
        distributed: true
      },
    }
      this.dataLabels = {
        enabled: true
      };
      this.legend = {
        show: false
      };
//pie series
      this.pieseries = [4,5,6,2,1];
      this.piechart = {
        width:380,
        type: 'donut'};
      this.labels = ["Inexistente", "Reactivo", "Algunas veces", "Proactivo", "Anticipado"];
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
                fontSize:'18px',
                offsetY: -10,
                
              }
            }
          }
        }
      };
     
      this.fill = {
        type: "gradient"
      };
      this.piedataLabels = {
        enabled: false
      };
      this.pietitle = {
        text: 'Nivel de Madurez según CIS Top 18'
      };
    }
  }
