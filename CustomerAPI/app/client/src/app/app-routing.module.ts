import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CustomerComponent} from './customer/customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CustomerDetailsComponent} from './customer/customer-details/customer-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'ListCustomer', component: ListCustomerComponent },
  { path : 'ViewCustomer/:id', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
