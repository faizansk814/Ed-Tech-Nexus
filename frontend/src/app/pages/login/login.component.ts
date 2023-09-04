import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/all.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string
  password!: string
  isloading!: boolean
  constructor(private studentService: StudentService, private router: Router) { }
  HandleSubmit() {
    this.isloading = true
    let obj:User = {
      email: this.email,
      password: this.password
    }
    this.studentService.loginstudent(obj).subscribe((res) => {
      console.log(res)
      if (res.msg == "login succesfull") {
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", JSON.stringify(res.user))
        this.isloading = false
        Swal.fire({
          'icon': 'success',
          'title': `${res.msg}`,
          'text': 'You have Login Successfully'
        })
        setTimeout(() => {
          if(res.user.role=="instructor"){
            this.router.navigate(['/instructor']).then(()=>{
              window.location.reload()
            })
          }else{
            this.router.navigate(['/']).then(()=>{
              window.location.reload()
            })
          }
        }, 2000);
      } else {
        this.isloading = false
        Swal.fire({
          'icon': 'error',
          'title': `${res.msg}`,
          'text': `${res.msg}`
        })
      }
    })

  }


}
