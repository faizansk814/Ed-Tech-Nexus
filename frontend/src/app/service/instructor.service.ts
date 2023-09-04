import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Assingment, Course } from '../models/all.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  token:string=localStorage.getItem("token")||""
  private url="http://localhost:8000"
  id!:number
  constructor(private http:HttpClient) { }

  getAllCourse():Observable<{data:Course[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const geturl=`${this.url}/course/get`
    return this.http.get<{data:Course[]}>(geturl,{headers})
  }

  getInstructorCourse():Observable<{data:Course[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/course/getcourses`
    return this.http.get<{data:Course[]}>(url,{headers})
  }

  particularCourseAssign(id:any):Observable<{data:Assingment[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/partcourse/${id}`
    return this.http.get<{data:Assingment[]}>(url,{headers})  
  }
  CreateAssignment(obj:Assingment,id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/create/${id}`
    return this.http.post<any>(url,obj,{headers})

  }

  SeeSubmission(id:any){
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/sub/seeallsub/${id}`
    return this.http.get<any>(url,{headers})
  }

  CreateAnnouncement(obj:any,id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/announcement/create/${id}`
    return this.http.post(url,obj,{headers})
  }

  createCoursedata(obj:Course):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/course/create`
    return this.http.post<any>(url,obj,{headers})
  }

}
