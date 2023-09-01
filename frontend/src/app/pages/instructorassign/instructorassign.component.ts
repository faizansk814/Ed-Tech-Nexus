import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-instructorassign',
  templateUrl: './instructorassign.component.html',
  styleUrls: ['./instructorassign.component.css']
})
export class InstructorassignComponent implements OnInit {
  courseid=localStorage.getItem("id")||""
  datas:any[]=[]

  constructor(private instructorService:InstructorService,private ngZone:NgZone){}
  ngOnInit(): void { 
    this.getParticularAssignments()
  }

  getParticularAssignments(){
    this.instructorService.particularCourseAssign(this.courseid).subscribe((res)=>{
      console.log(res)
      this.datas=res.data
    })
    
  }


}
