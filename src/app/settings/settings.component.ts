import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }
  isShowAdmin: boolean = true;
  isShowChart: boolean = true;
  isShowCallWidget: boolean = true;
  ngOnInit(): void {
    this.isShowAdmin = this.settingsService.isShowAdmin;
    this.isShowChart = this.settingsService.isShowChart;
    this.isShowCallWidget = this.settingsService.isShowCallWidget;
  }
  showAdmin(event) {
    this.settingsService.showAdmin(event.target.checked);
    this.isShowAdmin = event.target.checked;
  }

  showChart(event) {
    this.settingsService.showChart(event.target.checked);
    this.isShowChart = event.target.checked;
  }
  showCallWidget(event) {
    this.settingsService.showCallWidget(event.target.checked);
    this.isShowCallWidget = event.target.checked;
  }
}
