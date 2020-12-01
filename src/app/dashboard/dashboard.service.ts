import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import team from '../../assets/teams.json';
import { Team } from '../shared/team.model'
import { Chart } from 'angular-highcharts';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  teams: Team[] = team;
  currentNumber: number = 5;
  chart: Chart;
  numberChanged = new Subject<number>();
  constructor() { }

  getTeams() {
    return this.teams.slice();
  }

  makeNewChart() {
    this.chart = new Chart({
      chart: {
        type: 'area',
        marginRight: 10,
        events: {
          load: () => {
            console.log("test")
            // set up the updating of the chart each second
            setInterval(() => {
              var x = (new Date()).getTime(), // current time
                y = Math.round(Math.random() * 100);
              this.currentNumber = y;
              this.numberChanged.next(this.currentNumber);
              this.chart.addPoint([x, y]);
            }, 3000);
          }
        }
      },
      time: {
        useUTC: false
      },
      title: {
        text: 'Live Call Number'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      yAxis: {
        title: {
          text: 'Value'
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },

      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, 'red'],
              [0.3, 'orange'],
              [0.7, 'green'],
              [1, 'gray']
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      exporting: {
        enabled: false
      },
      series: [
        {
          name: 'Elevation',
          type: undefined,
          lineColor: 'green',
          color: 'red',
          fillOpacity: 0.3,
          data: (
            function () {
              // generate an array of random data
              var data = [], time = (new Date()).getTime(), i;
              i = 0;
              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.random() * 100
                });
              }
              return data;
            }()
          )
        },
      ]
    });
    return (this.chart);
  }

}
