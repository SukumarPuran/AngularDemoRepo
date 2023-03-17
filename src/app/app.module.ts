import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ProjectsComponent } from './admin/projects/projects.component';
import { AboutComponent } from './admin/about/about.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import {RouterModule} from '@angular/router';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,AdminModule],
  providers: [DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
