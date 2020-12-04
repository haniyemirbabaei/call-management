import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';
import { DashboardService } from './dashboard.service';
import { Chart } from 'angular-highcharts';
import { SettingsService } from '../settings/settings.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teams: Team[] = [];
  activeId: number = 1;
  currentNumber: number = 0;
  chart: Chart;
  myInterval: any;
  showChart: boolean = true;
  showCallWidget:boolean=true;

  constructor(private dashboardService: DashboardService, private settingsServie: SettingsService) { }

  ngOnInit(): void {
    this.showChart = this.settingsServie.isShowChart;
    this.showCallWidget=this.settingsServie.isShowCallWidget;
    if (this.showChart) {
      this.init();
    }
    this.teams = this.dashboardService.getTeams();
  }
  selectTeam(index: number) {
    this.activeId = index;
  }
  changeTeam() {
    this.init();
  }
  init() {
    let chart = new Chart({
      chart: {
        type: 'area'
      },
      title: {
        text: 'Live Call Management'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
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
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Time',
        data: [{
          x: (new Date()).getTime(),
          y: 0
        }]
      }]
    });
    this.chart = chart;
    if (this.myInterval) {
      clearInterval(this.myInterval);
      this.currentNumber = 0;
    }
    this.myInterval = setInterval(() => {
      var x = (new Date()).getTime(); // current time
      var y = Math.round(Math.random() * 100);
      this.chart.addPoint([x, y]);
      this.currentNumber = y;
    }, 2000);
  }
}
