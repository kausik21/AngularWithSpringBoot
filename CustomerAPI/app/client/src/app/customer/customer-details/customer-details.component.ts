import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  id: number;
  customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router,
              private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();
    this.id = this.route.snapshot.params.id;

    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      },
        error => console.log(error))
  }

}
