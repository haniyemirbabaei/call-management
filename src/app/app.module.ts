import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppDropdownDirective } from './shared/app-dropdown.directive';
import { ChartModule } from 'angular-highcharts';
import { ShowAdminUsersPipe } from './shared/show-admin-users.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
    HeaderComponent,
    AppDropdownDirective,
    ShowAdminUsersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
