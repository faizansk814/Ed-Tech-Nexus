import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assingment } from 'src/app/models/all.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  datas:Assingment[]=[]
  isloading:boolean=true
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.allAssignments()
  }
  allAssignments(){
    this.studentService.getAllassignment().subscribe((res:{data:Assingment[]})=>{
      this.datas=res.data
      this.isloading=false
    })
  }

  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/particular'])
  }

}
