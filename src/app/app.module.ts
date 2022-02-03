import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { BillcalculationComponent } from './billcalculation/billcalculation.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { HouseholdComponent } from './household/household.component';
import { CalculationdetailsComponent } from './calculationdetails/calculationdetails.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { BillComponent } from './bill/bill.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CustomersListComponent,
    LoginComponent,
    PaymentsComponent,
    BillcalculationComponent,
    HomeComponent,
    ContactusComponent,
    IndustrialComponent,
    HouseholdComponent,
    CalculationdetailsComponent,
    CustomersListComponent,
    CustomerEditComponent,
    BillComponent,
    ForgotpasswordComponent,
    BillEditComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
