import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit } from './visit';
import { environment } from 'src/environments/environment';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor( private http: HttpClient ) { }

  //Methods
  //Method that request all the objects Visit; its type is Observable
  public getVisit(): Observable<Visit[]>{
    return this.http.get<Visit[]>(`${this.apiServerUrl}/visit/all`);
}

  public getVisitbyIdDepartment(idDepartment: Department): Observable<Visit[]>{
    return this.http.get<Visit[]>(`${this.apiServerUrl}/visit/find/${idDepartment}`);
  }

}
