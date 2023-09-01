import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  token:string=localStorage.getItem("token")||""
  private url="http://localhost:8000"
  id!:number
  constructor(private http:HttpClient) { }

  getAllCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const geturl=`${this.url}/course/get`
    return this.http.get<any>(geturl,{headers})
  }

  getInstructorCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/course/getcourses`
    return this.http.get<any>(url,{headers})
  }
  particularCourseAssign(id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/partcourse/${id}`
    return this.http.get<any>(url,{headers})  
  }
  CreateAssignment(obj:any,id:any):Observable<any>{
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

}
