import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructorassign',
  templateUrl: './instructorassign.component.html',
  styleUrls: ['./instructorassign.component.css']
})
export class InstructorassignComponent implements OnInit {
  courseid = localStorage.getItem("id") || ""
  datas: any[] = []

  constructor(private instructorService: InstructorService, private router:Router) { }
  ngOnInit(): void {
    this.getParticularAssignments()
  }

  getParticularAssignments() {
    this.instructorService.particularCourseAssign(this.courseid).subscribe((res) => {
      console.log(res)
      this.datas = res.data
    })


  }

  HandleClick(id:any){
    localStorage.setItem('subid',id)
    this.router.navigate(['/submission'])

  }


}
