import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../core/customer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input()
  customer!: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
