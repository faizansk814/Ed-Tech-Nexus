import { Component } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-createassign',
  templateUrl: './createassign.component.html',
  styleUrls: ['./createassign.component.css']
})
export class CreateassignComponent {
  courseid=localStorage.getItem("id")||""
  title!:string
  description!:string
  end_date!:any
  constructor(private instructorService:InstructorService){}
  HandleSubmit(){
    let obj={
      title:this.title,
      description:this.description,
      end_date:this.end_date
    }
    this.instructorService.CreateAssignment(obj,this.courseid).subscribe((res)=>{
      alert(res.msg)
      console.log(res)
      window.location.reload()
    })
  }

}
