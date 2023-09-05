import { Component, OnInit } from '@angular/core';
import { Submission } from 'src/app/models/all.model';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  assid=localStorage.getItem('subid')||""
  datas:Submission[]=[]
  nodata:boolean=false
  images:string='https://static.vecteezy.com/system/resources/previews/005/163/930/non_2x/incomplete-data-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'

  constructor(private instructorService:InstructorService){}
  ngOnInit(): void {
    this.seeSubmission()
  }

  seeSubmission(){
    this.instructorService.SeeSubmission(this.assid).subscribe((res:{data:Submission[]})=>{
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      console.log(res)
    })
  }

}
