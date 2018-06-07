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
        backgroundColor: 'transparent'
      },
      title: {
        text: this.data.name,
        style: {
          color: '#e1e1e1',
          fontSize: '2em'
        }
      },
      xAxis: {
        min: 0,
        max: 3,
        categories: ['150-200', '100-150', '50-100', '0-50'],
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
        },
        labels: {
          rotation: -90,
        },
        tickWidth: 0
      },
      yAxis: {
        min: 0,
        max: 100,
        gridLineWidth: 0,
        title: {
          text: 'Nombre de Pokémon'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        },
        labels: {
          enabled: false
        },
        tickWidth: 0
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
          data: [10, 60, 50, 30],
          color: this.data.color,
          pointWidth: 55
        }
      ],
      credits: {
        enabled: false
      }
    });
  }
}
