import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer.model';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private  baseUrl = 'http://localhost:8080/api/v1/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

  createCustomer(customer: object): Observable<object> {
    return this.http.post(this.baseUrl, customer);
  }

  getCustomerList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getUsers(): Observable<any> {
    return this.http.get<Customer[]>(this.baseUrl);
  }


  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}

