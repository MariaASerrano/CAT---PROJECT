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
@Component({
  selector: 'app-ransomware',
  templateUrl: './ransomware.component.html',
  styleUrls: ['./ransomware.component.scss']
})
export class RansomwareComponent implements OnInit {

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
  private initializeChartOptions(): void {
    //radial bar
  this.series_bar = [30]; //aquí va el porcentaje de preparación
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
      type:"stroke",
    }),
    (this.stroke_bar = {
      lineCap: 'round',
    }),
    (this.labels_bar = ['Preparación']);
     
    }
  }
