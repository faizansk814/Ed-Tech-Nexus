import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url="https://ed-tech-backend-8way.onrender.com"
  constructor(private http:HttpClient) { }

  registerStudent(obj:any):Observable<any>{
    const url=`${this.url}/user/register`
    return this.http.post<any>(url,obj)
  }

  loginstudent(obj:any):Observable<any>{
    const url=`http://localhost:8000/user/login`
    return this.http.post<any>(url,obj)
  }

  enrolCourse(id:number):Observable<any>{
    const url=`http://localhost:8000/enrol/create/${id}`
    return this.http.post<any>(url,{})
  }

  getStudentCourse():Observable<any>{
    const url=`http://localhost:8000/user/get`
    return this.http.get<any>(url,{withCredentials:true})
  }
}
