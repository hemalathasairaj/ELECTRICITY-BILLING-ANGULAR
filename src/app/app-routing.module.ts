import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AuthGuard } from './auth.guard';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { BillComponent } from './bill/bill.component';
import { BillcalculationComponent } from './billcalculation/billcalculation.component';
import { CalculationdetailsComponent } from './calculationdetails/calculationdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { HouseholdComponent } from './household/household.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'addressregisteration',component:AddressComponent},
  {path:'bill',component:BillComponent},
  {path:'updateCus/:cid',component:CustomerEditComponent},
  {path:'updateCus/:billno',component:BillEditComponent},
  {path:'customer_list',component:CustomersListComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'billcalculation',component:BillcalculationComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'calculationdetails',component:CalculationdetailsComponent,
  children:[
    {path:'Indutrial',component:IndustrialComponent},
    {path:'Household',component:HouseholdComponent}
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
