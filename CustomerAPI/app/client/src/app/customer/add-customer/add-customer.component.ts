import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer.model';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {


  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService, private  router: Router) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  OnSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.toGolist();
  }

  toGolist() {
   this.router.navigate(['ListCustomer']);
  }
}
