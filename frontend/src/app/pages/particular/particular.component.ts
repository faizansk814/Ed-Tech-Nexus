import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-particular',
  templateUrl: './particular.component.html',
  styleUrls: ['./particular.component.css']
})
export class ParticularComponent implements OnInit {
  data: any = {}
  assid = localStorage.getItem('id')
  link!: string
  isloading:boolean=true
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.getassignment()
  }

  getassignment() {
    this.studentService.getParticular(this.assid).subscribe((res) => {
      console.log(res)
      this.data = res.data
      this.isloading=false
    })
  }

  HandleClick(id: number) {
    let obj = {
      submission_link: this.link
    }
    this.studentService.SubmitAssign(obj, id).subscribe((res) => {
      if (res.msg == "Submitted") {
        Swal.fire({
          'icon': 'success',
          'title': `${res.msg}`,
          'text': 'Assignment Submitted Successfully'
        })
      } else {
        Swal.fire({
          'icon': 'error',
          'title': `${res.msg}`,
          'text': 'Assignment Already Successfully'
        })
      }
    })
  }

}
