import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  assid=localStorage.getItem('subid')||""
  datas:any[]=[]

  constructor(private instructorService:InstructorService){}
  ngOnInit(): void {
    this.seeSubmission()
  }

  seeSubmission(){
    this.instructorService.SeeSubmission(this.assid).subscribe((res)=>{
      this.datas=res.data
      console.log(res)
    })
  }

}
