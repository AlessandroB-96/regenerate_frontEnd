import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient ) { }

  //Methods
  //Method that request all the objects Department; its type is Observable
  public getDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiServerUrl}/department/all`);
  }

  public getIdDepartmentByDepartmentName(departmentName: string): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/department/getId/${departmentName}`);
  }
  
}
