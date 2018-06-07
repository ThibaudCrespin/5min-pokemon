import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  public chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: null
      },
      xAxis: {
        min: 0,
        max: 6,
        categories: ['1', '2', '3', '4', '5', '6', '7'],
        title: {
          text: 'Génération'
        }
      },
      yAxis: {
        min: 0,
        max: 150,
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
        color: '#2f63cd'
      }],
      credits: {
        enabled: false
      }
    });
  }

  ngOnInit() {}
}
