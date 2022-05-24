import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(`${environment.apiBaseUrl}/reservation/add`, reservation);
  }
  
}
