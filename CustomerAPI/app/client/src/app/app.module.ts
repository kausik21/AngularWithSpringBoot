import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule} from '@angular/cdk/table';
import {MatInputModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {CustomerService} from './services/customer.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
