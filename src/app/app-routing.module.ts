import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
 import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  { path:"dashboard",component:DashboardComponent },
   { path:"about",component:AboutComponent },
 { path:"projects",component:ProjectsComponent },
  { path:"",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
