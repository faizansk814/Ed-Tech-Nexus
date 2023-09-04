import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/models/all.model';
import { InstructorService } from 'src/app/service/instructor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent {
  course!: FormGroup;
  constructor(private fb: FormBuilder, private instructorService:InstructorService) {
    this.courseCall();
  }
  ngOnInit(): void {}

  courseCall() {
    this.course = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  OnSubmit() {
    console.log('clicked');
    if (this.course.valid) {
      const data:Course = this.course.value;
      console.log(data);
      this.instructorService.createCoursedata(data).subscribe((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: `Course Created Succesfully`,
          text: `${data.msg}`,
        });
      });
    }
  }

}
