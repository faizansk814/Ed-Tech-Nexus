import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  datas:any[]=[]
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.allAssignments()
  }
  allAssignments(){
    this.studentService.getAllassignment().subscribe((res)=>{
      this.datas=res.data
    })
  }

  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/particular'])
  }

}
