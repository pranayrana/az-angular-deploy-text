import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/customers.service';
import { Observable } from 'rxjs';
import { Customer } from '../core/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService : CustomersService) { }
  customers$!: Observable<Customer[]>;
  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
  }

}
