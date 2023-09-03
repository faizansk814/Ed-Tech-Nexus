import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  datas:any[]=[]
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.getAllAnnouncement()
  }

  getAllAnnouncement(){
    this.studentService.getAnnouncement().subscribe((res)=>{
      this.datas=res.data
    })
  }

  HandleClick(data:any){
    localStorage.setItem("announcement",JSON.stringify(data))
    this.router.navigate(['/getannouncement'])

  }



}
