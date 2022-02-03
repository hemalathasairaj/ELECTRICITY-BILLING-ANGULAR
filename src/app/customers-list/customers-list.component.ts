import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CusserviceService } from '../cusservice.service';
import { AddserviceService } from '../addservice.service';
import { BillserviceService } from '../billservice.service';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  public customers = [] as any;
  public address=[] as any;
  public bills = [] as any;
  constructor(private cservice: CusserviceService,
              private aservice:AddserviceService,
              private bservice: BillserviceService,
               private router: Router) { }
  public selectedId: number = 0;
  ngOnInit(): void {
    this.cservice
    .getCustomersFromservice()
    .subscribe((data)=>(this.customers = data));
    this.aservice
    .getAddressFromservice()
    .subscribe((data)=>(this.address=data));
    this.bservice
    .getBillsFromservice()
    .subscribe((data)=>(this.bills = data));
  }
  onDelete(cus: Customer) {
    this.selectedId = cus.cid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.cservice
        .deleteCustomer(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/customer_list']));

    }
    
  }
  }
