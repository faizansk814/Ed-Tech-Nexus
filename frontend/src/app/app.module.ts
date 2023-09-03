import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentenrollComponent } from './pages/studentenroll/studentenroll.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ParticularComponent } from './pages/particular/particular.component';
import { CoursenavbarComponent } from './components/coursenavbar/coursenavbar.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorassignComponent } from './pages/instructorassign/instructorassign.component';
import { CreateassignComponent } from './components/createassign/createassign.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { GetannouncementComponent } from './pages/getannouncement/getannouncement.component';
import { CannouncementComponent } from './components/cannouncement/cannouncement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentenrollComponent,
    AssignmentComponent,
    ParticularComponent,
    CoursenavbarComponent,
    InstructorComponent,
    InstructorassignComponent,
    CreateassignComponent,
    SubmissionComponent,
    LoaderComponent,
    ProfileComponent,
    AnnouncementComponent,
    GetannouncementComponent,
    CannouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
