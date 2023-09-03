import { Component } from '@angular/core';

@Component({
  selector: 'app-getannouncement',
  templateUrl: './getannouncement.component.html',
  styleUrls: ['./getannouncement.component.css']
})
export class GetannouncementComponent {
  data:any=JSON.parse(localStorage.getItem("announcement")||'{}')
  firstletter:string=this.data.instructor_name[0]
  lastletter:string=this.data.instructor_name[this.data.instructor_name.length-1]
  imageurl:string=`https://ui-avatars.com/api/?name=${this.firstletter}+${this.lastletter}&amp;color=7F9CF5&amp;background=EBF4FF`
}
