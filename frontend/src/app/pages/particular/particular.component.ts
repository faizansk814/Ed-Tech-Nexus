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

}
