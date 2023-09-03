import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cannouncement',
  templateUrl: './cannouncement.component.html',
  styleUrls: ['./cannouncement.component.css']
})
export class CannouncementComponent implements OnInit {
  title!:string
  content!:string
  courseid:number|string=""
  datas:any[]=[]
  constructor(private instructorService:InstructorService){}
  ngOnInit(): void {
    this.datas=JSON.parse(localStorage.getItem("instructordata")||'[]')
  }
  
  HandleSubmit(){
    let obj={
      title:this.title,
      content:this.content
    }
    this.instructorService.CreateAnnouncement(obj,this.courseid).subscribe((res)=>{
      if(res.msg=="Announcement Created"){
        Swal.fire({
          'icon':'success',
          'title':`${res.msg}`,
          'text':'Announcement Created Successfully'
        })
      }else{
        Swal.fire({
          'icon':'error',
          'title':`${res.msg}`,
          'text':'Announcement Created Failed'
        })
      }
    })
  }



}
