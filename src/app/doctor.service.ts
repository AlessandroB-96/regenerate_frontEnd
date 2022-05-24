import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from './department';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor( private http: HttpClient ) { }

  //Methods
  //Method that request all the objects Doctor; its type is Observable
  public getDoctor(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctor/all`);
  }

  /**
   * It returns an Observable of an array of Doctor objects filtered by id department
   * @param {Department} id - Department
   * @returns An array of Doctor objects.
   */
  public getDoctorsByIdDepartment(id: number): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctor/find/${id}`);
  }  

  /**
   * This function is used to get a doctor by name
   * @param {string} name - string
   * @returns Observable<Doctor>
   */
  public getDoctorByName(name: string | undefined): Observable<Doctor>{
    return this.http.get<Doctor>(`${this.apiServerUrl}/doctor/getDoctor/${name}`);
  }

}

