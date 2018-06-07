import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  public chart: Chart;
  public charts: any;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: 850
      },
      title: {
        text: null
      },
      xAxis: {
        min: 0,
        max: 6,
        gridLineWidth: 0,
        categories: ['1', '2', '3', '4', '5', '6', '7'],
        title: {
          text: 'Génération'
        },
        tickWidth: 0
      },
      yAxis: {
        min: 0,
        max: 200,
        title: {
          text: 'Nombre de Pokémon'
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
      },
      plotOptions: {
        column: {
            dataLabels: {
                enabled: true
            },
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      series: [{
        name: 'Nombre de Pokémon',
        data: [166, 165, 155, 120, 105, 80, 85],
        color: '#2f63cd',
        pointWidth: 90
      }],
      credits: {
        enabled: false
      }
    });
  }

  ngOnInit() {
    this.charts = {
      attack: {
        name: 'Attaque',
        color: '#6dc283'
      },
      defense: {
        name: 'Défense',
        color: '#cb4076'
      },
      speed: {
        name: 'Vitesse',
        color: '#e59883'
      }
    };
  }
}
