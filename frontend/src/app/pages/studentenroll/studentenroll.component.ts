import { Component ,OnInit} from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-studentenroll',
  templateUrl: './studentenroll.component.html',
  styleUrls: ['./studentenroll.component.css']
})
export class StudentenrollComponent implements OnInit {
  datas:any[]=[]
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getStudentcourse()
  }
  getStudentcourse(){
    this.studentService.getStudentCourse().subscribe((res)=>{
      console.log(res)
      this.datas=res.data
    })
  }
}
