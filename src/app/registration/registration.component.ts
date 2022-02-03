import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CusserviceService} from '../cusservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddserviceService } from '../addservice.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input()
  costumerlogin:any=
  {
    fullname:'',
    phone:'',
    email:'',
    password:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    readingintake :'',
    duedate :'',
    connection:'',
    unitsused:'',
    amount:''
  }
  submitted = false;
  constructor(private service : CusserviceService,
             private aservice : AddserviceService,
             public router:Router) {}

  ngOnInit(): void {}
  onSubmit()
  {
   this.submitted = true;
    alert('Customer datas are validated successfully!');
  
  }
  
  addcustomer() 
  {
    console.log('From cus.comp.ts'+this.costumerlogin);
    this.service.createCustomer(this.costumerlogin).subscribe((data:{})=>this.router.navigate(['customer_list']));
    }
}
