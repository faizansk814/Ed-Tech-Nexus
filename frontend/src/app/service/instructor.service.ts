import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private url="https://ed-tech-backend-8way.onrender.com"
  constructor(private http:HttpClient) { }

  getAllCourse():Observable<any>{
    const geturl=`${this.url}/course/get`
    return this.http.get<any>(geturl)
  }

}
