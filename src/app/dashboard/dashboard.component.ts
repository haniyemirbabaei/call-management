import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from '../shared/team.model';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  teams: Team[] = [];
  activeId: number = 0;
  currentNumber: number = 0;
  subscription: Subscription;
  chart = this.dashboardService.makeNewChart();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
     this.subscription=this.dashboardService.numberChanged.subscribe((currentNumber:number)=>{
       this.currentNumber=currentNumber;
     })
     this.teams=this.dashboardService.getTeams();

  }
  selectTeam(index: number) {
    this.activeId = index;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
