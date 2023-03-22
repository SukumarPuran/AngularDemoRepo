import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from 'src/app/admin/project';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
  })
  export class ProjectsComponent implements OnInit 
  {
    projects: Project[] = [];
    newProject: Project = new Project();
  
    constructor(private projectsService: ProjectsService) { 
      
    }
  
    ngOnInit()
    { 
      
      this.projectsService.getAllProjects().subscribe(
      ( response: Project[]) => {
        this.projects = response;
      }

    );
    }
    onSaveClick()
    {
      this.projectsService.insertProjects(this.newProject).subscribe((response) => {
         response.map((resp) => this.projects.push(resp));
        // var p: Project = new Project();
        // p.projectID = response.projectID;
        // p.projectName = response.projectName;
        // p.dateOfStart = response.dateOfStart;
        // p.teamSize = response.teamSize;
        
       

        this.newProject.projectID = 0;
        this.newProject.projectName ="";
        this.newProject.dateOfstart ="";
        this.newProject.teamSize = 0;
      }, (error) => {
        console.log(error);
      });
    }
  
  }