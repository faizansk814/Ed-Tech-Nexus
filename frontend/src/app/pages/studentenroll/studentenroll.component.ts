import { Component ,OnInit} from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-studentenroll',
  templateUrl: './studentenroll.component.html',
  styleUrls: ['./studentenroll.component.css']
})
export class StudentenrollComponent implements OnInit {
  datas:any[]=[]
  isloading:boolean=true
  nodata:boolean=false
  images:string='https://static.vecteezy.com/system/resources/previews/005/163/930/non_2x/incomplete-data-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getStudentcourse()
  }
  getStudentcourse(){
    this.studentService.getStudentCourse().subscribe((res)=>{
      console.log(res)
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      this.isloading=false
    })
  }
}
