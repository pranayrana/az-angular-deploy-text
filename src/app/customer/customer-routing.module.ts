import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list.component';
import { EditComponent } from './edit.component';
import { CustomerResolver } from './customer.resolver';

const routes: Routes = [
  // {path:'',pathMatch:'full', redirectTo: 'customers' },
  { path:'', component:CustomersListComponent, data: {title : 'Customers'}},
  { path:'edit/:id', component: EditComponent , resolve: {cust: CustomerResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
