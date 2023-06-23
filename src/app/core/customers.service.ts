import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, flatMap, mergeMap } from 'rxjs/operators';

import { Customer } from './customer';

import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

   customers = [
    {id: 1, name:'pranay', email:'test@gmail.com', address:'test building'}, 
    {id: 2, name:'krishna', email:'krishna@gmail.com', address:'krishna building'}, 
  ];

  constructor(private http:HttpClient ) { }

  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>('../../assets/customers.json');
  }

  getCustomer(id:number) {

    return this.http.get<Customer[]>('../../assets/customers.json').pipe(
      mergeMap (cust=> cust),
      filter(cust=> cust.id === id)
    );
  }
}
