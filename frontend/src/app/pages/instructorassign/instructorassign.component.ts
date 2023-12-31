import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { Router } from '@angular/router';
import { Assingment } from 'src/app/models/all.model';

@Component({
  selector: 'app-instructorassign',
  templateUrl: './instructorassign.component.html',
  styleUrls: ['./instructorassign.component.css']
})
export class InstructorassignComponent implements OnInit {
  courseid = localStorage.getItem("id") || ""
  datas: Assingment[] = []
  isloading:boolean=true

  constructor(private instructorService: InstructorService, private router:Router) { }
  ngOnInit(): void {
    this.getParticularAssignments()
  }

  getParticularAssignments() {
    this.instructorService.particularCourseAssign(this.courseid).subscribe((res:{data:Assingment[]}) => {
      console.log(res)
      this.datas = res.data
      this.isloading=false
    })


  }

  HandleClick(id:any){
    localStorage.setItem('subid',id)
    this.router.navigate(['/submission']).then(()=>{
      window.location.reload()
    })

  }


}
