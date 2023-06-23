import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from '../core/customer';
import { CustomersService } from '../core/customers.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<Customer> {

  constructor( private customersService: CustomersService) {
   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    const id = +route.paramMap.get('id')!;
    return this.customersService.getCustomer(id);
  }
}
