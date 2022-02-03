import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillserviceService } from '../billservice.service';
import { CusserviceService } from '../cusservice.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
@Input()
costumerlogin:any={
    readingintake :'',
    duedate :'',
    connection:'',
    unitsused:'',
    amount:''
  }
  
  submitted = false;
  constructor(private service : BillserviceService,public router:Router) {}


  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    alert('Bill Details validated successfully!');
 }
 addbill(){
  console.log('from bill comp.ts'+this.costumerlogin)
  this.service.createBill(this.costumerlogin).subscribe((data:{})=>this.router.navigate(['/customer_list']));
    
 }
 
}
