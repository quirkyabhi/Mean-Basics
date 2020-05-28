import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { iEmployees } from './iEmployees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private url= "assets/data/employees.json"
  getEmployees(): Observable<iEmployees[]>{
    // return [
    //   {"id":101,"name":"abhi","salary":55000,"dept":"DB"},
    //   {"id":102,"name":"abhijeet","salary":65000,"dept":"Testing"},
    //   {"id":103,"name":"avi","salary":45000,"dept":"Cloud"}
    //  ]
    
    return this.http.get<iEmployees[]>(this.url);
  }
}
