import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  token:string=localStorage.getItem("token")||""
  private url="http://localhost:8000"
  constructor(private http:HttpClient) { }

  getAllCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const geturl=`${this.url}/course/get`
    return this.http.get<any>(geturl,{headers})
  }

}
