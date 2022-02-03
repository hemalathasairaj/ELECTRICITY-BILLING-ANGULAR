import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddserviceService } from '../addservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  costumerlogin:any=
  {
    street:'',
    city:'',
    state:'',
    pincode:'',
  }
  submitted = false;
  constructor(private service : AddserviceService,public router:Router) {}

  ngOnInit(): void {}
  onSubmit()
  {
   this.submitted = true;
    alert('Customers address are validated successfully!');
  }
  
  addaddress() 
  {
    console.log('From cus.comp.ts'+this.costumerlogin);
    this.service.createAddress(this.costumerlogin).subscribe((data:{})=>this.router.navigate(['customer_list']));
  }
}
