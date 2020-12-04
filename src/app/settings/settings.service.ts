import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  isShowAdmin: boolean = true;
  isShowChart: boolean = true;
  isShowCallWidget: boolean = true;

  constructor() { }
  showAdmin(isChecked: boolean) {
    this.isShowAdmin = isChecked;
  }
  showChart(isChecked: boolean) {
    this.isShowChart = isChecked;
  }
  showCallWidget(isChecked: boolean) {
    this.isShowCallWidget = isChecked;
  }
}
