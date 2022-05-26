import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/all`);
  }

  public getCustomerById(id: number | undefined): Observable<Customer>{
    return this.http.get<Customer>(`${this.apiServerUrl}/customer/find/${id}`);
  }

}
