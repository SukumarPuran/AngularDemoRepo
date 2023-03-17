import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';

import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent, 
    ProjectsComponent
  ],
  imports: [ CommonModule],
  exports:[DashboardComponent, MyProfileComponent,AboutComponent,ProjectsComponent ],
  providers: [DashboardService]
})
export class AdminModule
 {

  }
