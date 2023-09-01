import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentenrollComponent } from './pages/studentenroll/studentenroll.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ParticularComponent } from './pages/particular/particular.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorassignComponent } from './pages/instructorassign/instructorassign.component';
import { SubmissionComponent } from './pages/submission/submission.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'course',component:StudentenrollComponent},
  {path:'assignment',component:AssignmentComponent},
  {path:'particular',component:ParticularComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'instructorassign',component:InstructorassignComponent},
  {path:'submission',component:SubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
