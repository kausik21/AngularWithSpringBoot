import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Observable} from 'rxjs/index';
import {Customer} from '../../models/customer.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private  router: Router) {
  }

  customers = this.customerService.getUsers();
  // dataSource = new MatTableDataSource<Customer[]>(this.customers);
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId', 'actions'];
  public dataSource = new MatTableDataSource<Customer>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerService.getCustomerList().subscribe(res => {
      this.dataSource.data = res as Customer[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  customerDetails(id: number) {
    this.router.navigate(['ViewCustomer', id]);
  }

  deleteEmployee(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}


