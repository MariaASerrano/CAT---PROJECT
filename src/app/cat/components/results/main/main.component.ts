import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexTitleSubtitle, ApexChart, ApexYAxis, ApexLegend,ApexXAxis, ApexPlotOptions, ApexDataLabels} from 'ng-apexcharts';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
        enabled: false
      },
      this.legend = {
        show: false
      }
    }
  }
