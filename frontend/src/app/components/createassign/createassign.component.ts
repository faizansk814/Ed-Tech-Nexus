import { Component } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import Swal from 'sweetalert2';

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
      if(res.msg=="Assignment Created"){
        Swal.fire({
          'icon':'success',
          'title':`${res.msg}`,
          'text':'Assignment Created Successfully'
        })
        console.log(res)
        window.location.reload()
      }else{
        Swal.fire({
          'icon':'error',
          'title':`${res.msg}`,
          'text':`${res.msg}`
        })
      }
    })
  }

}
