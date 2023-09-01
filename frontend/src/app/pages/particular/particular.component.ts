import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-particular',
  templateUrl: './particular.component.html',
  styleUrls: ['./particular.component.css']
})
export class ParticularComponent implements OnInit {
  data:any={}
   assid=localStorage.getItem('id')
   link!:string
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getassignment()
  }

  getassignment(){
    this.studentService.getParticular(this.assid).subscribe((res)=>{
      console.log(res)
      this.data=res.data
    })
  }

  HandleClick(id:number){
    let obj={
      submission_link:this.link
    }
    this.studentService.SubmitAssign(obj,id).subscribe((res)=>{
      alert(res.msg)
      console.log(res)
    })
  }

}
