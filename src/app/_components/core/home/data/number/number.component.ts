import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @Input() public data: any;
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'bar',
        plotBorderWidth: 0,
        style: {
          color: 'blue'
        }
      },
      title: {
        text: ''
      },
      xAxis: {
        min: 0,
        max: 3,
        categories: ['0-50', '50-100', '100-150', '150-200'],
        title: {
          text: 'Points'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontFamily: 'genericabold',
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      yAxis: {
        min: 0,
        max: 150,
        title: {
          text: 'Nombre de Pokémon'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      series: [
        {
          name: 'Nombre de Pokémon',
          data: [0, 166, 165, 155, 120, 105, 80, 85]
        }
      ],
      credits: {
        enabled: false
      }
    });
  }
}
