import { Injectable } from '@angular/core';
import team from '../../assets/teams.json';
import { Team } from '../shared/team.model'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  teams: Team[] = team;
  constructor() { }

  getTeams() {
    return this.teams.slice();
  }
}
