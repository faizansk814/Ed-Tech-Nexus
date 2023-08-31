import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentenrollComponent } from './pages/studentenroll/studentenroll.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ParticularComponent } from './pages/particular/particular.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'course',component:StudentenrollComponent},
  {path:'assignment',component:AssignmentComponent},
  {path:'particular',component:ParticularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
