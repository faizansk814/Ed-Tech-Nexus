import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';

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
    console.log(this.courseid)

  }



}
