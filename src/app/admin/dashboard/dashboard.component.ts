import { Component, OnInit } from '@angular/core';
 import { DashboardService } from '../../dashboard.service';

 @Component({
  selector: 'app-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
 { 
   Designation:string="";
   Username:string="";
   NoOfTeamMembers:number=0;
   TotalCostOfAllProjects:number=0;
   PendingTask:number=0;
   UpcomingProjects:number=0;
   ProjectsCost:number=0;
   CurrentExpenditure:number;
   AvailableFunds:number;
   ToDay: Date = new Date();

   Clients:string[]=[];
   Projects:string[]=[];
   Years:number[]=[];
   TeamMembersSummary: any =[];
   TeamMembers:any[]=[];


  constructor( private dashboardService:DashboardService) {
  
    
    this.Designation="Team Leader";
    this.Username="Sukumar Puran";
    this.NoOfTeamMembers=70;
    this.TotalCostOfAllProjects=350;
    this.PendingTask=20;
    this.UpcomingProjects=0.2;
    this.ProjectsCost=256789;
    this.CurrentExpenditure=95000;
    this.AvailableFunds=89000;
    this.ToDay = new Date();

    this.Clients = [
      'ABC Infotech Ltd','DEF Software Solutions','GHI Industries',
    ];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D' ];
    for (var i = 2019; i >= 2010; i--)
  {
    this.Years.push(i);
  }
  this.TeamMembersSummary =   [
    { Region:"East", TeamMembersCount:20,TemporarilyUnavailableMembers:4 },
    { Region:"South",TeamMembersCount:15,TemporarilyUnavailableMembers:8},
    { Region:"West",TeamMembersCount:17,TemporarilyUnavailableMembers:1},
    { Region:"North",TeamMembersCount:15,TemporarilyUnavailableMembers:6}
    ];
   
  this.TeamMembers = [
    { Region: "East", Members:[
      { ID:1,Name:"Ford",Status:"Available"},
      { ID:2,Name:"Miller",Status:"Available"},
      { ID:3,Name:"Jones",Status:"Busy"},
      { ID:4,Name:"James",Status:"Busy"}
    ]
  },
  { Region: "West",Members:[
    { ID:5,Name:"Ram",Status:"Available"},
    { ID:6,Name:"Raj",Status:"Available"},
    { ID:7,Name:"Ravi",Status:"Busy"},
    { ID:8,Name:"Raju",Status:"Busy"}
  ]
},
{ Region: "South",Members:[
  { ID:9,Name:"Ramesh",Status:"Available"},
  { ID:10,Name:"Mahesh",Status:"Available"},
  { ID:11,Name:"Suresh",Status:"Busy"},
  { ID:12,Name:"Rajesh",Status:"Busy"}
]
},
{ Region: "North",Members:[
  { ID:1,Name:"Mina",Status:"Available"},
  { ID:2,Name:"Seema",Status:"Available"},
  { ID:3,Name:"Shikha",Status:"Busy"},
  { ID:4,Name:"Rekha",Status:"Busy"}
]
},
    ];
  }
 

  ngOnInit(): void {
//    throw new Error('Method not implemented.');
  }
  onProjectChange($event:any)
  {
    // console.log("$event.target.innerHTML---", $event.target.innerHTML);
    // console.log("Inside project B", $event.target.innerHTML === 'Project B');
    if($event.target.innerHTML == "Project A")
    {
      this.ProjectsCost=213507;
      this.CurrentExpenditure=96788;
      this.AvailableFunds=52436;
    }
    else if($event.target.innerHTML == "Project B")
    {
      
      this.ProjectsCost=88923;
      this.CurrentExpenditure=22450;
      this.AvailableFunds=2640;
    }
    else if($event.target.innerHTML == "Project C")
    {
      this.ProjectsCost=662183;
      this.CurrentExpenditure=7721;
      this.AvailableFunds=9811;
    }
    else if($event.target.innerHTML == "Project D")
    {
      this.ProjectsCost=928431;
      this.CurrentExpenditure=562;
      this.AvailableFunds=883;
    }
  }
}
 
 
  
 
