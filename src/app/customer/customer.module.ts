import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersListComponent } from './customers-list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail.component';
import { EditComponent } from './edit.component';


@NgModule({
  declarations: [
    CustomersListComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
