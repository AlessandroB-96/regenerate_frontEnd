import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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


}
