import { Component,OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  datas:any[]=[]

  constructor(private instructorService:InstructorService){}
  ngOnInit(): void {
    this.getallcourse()
  }

  getallcourse(){
    this.instructorService.getAllCourse().subscribe((res)=>{
      this.datas=res.data
    })
  }


}
