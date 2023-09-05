import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Announcement, Assingment, Submission, User } from '../models/all.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  token:string=localStorage.getItem("token")||""
  private url="https://ed-tech-backend-8way.onrender.com"
  constructor(private http:HttpClient) { }

  registerStudent(obj:User):Observable<any>{
    const url=`${this.url}/user/register`
    return this.http.post<any>(url,obj)
  }

  loginstudent(obj:User):Observable<any>{
    const url=`${this.url}/user/login`
    return this.http.post<any>(url,obj)
  }

  enrolCourse(id:number):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    console.log(this.token,id)
    const url=`${this.url}/enrol/create/${id}`
    return this.http.post<any>(url,{},{headers})
  }

  getStudentCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/enrol/getstudent`
    return this.http.get<any>(url,{headers})
  }

  getAllassignment():Observable<{data:Assingment[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    let url=`${this.url}/assignment/get`
    return this.http.get<{data:Assingment[]}>(url,{headers})
  }

  getParticular(id:any):Observable<{data:Assingment}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/see/${id}`
    return this.http.get<{data:Assingment}>(url,{headers})
  }

  SubmitAssign(obj:Submission,id:number):Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/sub/submit/${id}`
    return this.http.post(url,obj,{headers})
  }

  getAnnouncement():Observable<{data:Announcement[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/announcement/get`
    return this.http.get<{data:Announcement[]}>(url,{headers})

  }

  
}
