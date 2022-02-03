import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calculationdetails',
  templateUrl: './calculationdetails.component.html',
  styleUrls: ['./calculationdetails.component.css']
})
export class CalculationdetailsComponent implements OnInit {

  constructor(public router: Router,public aroute: ActivatedRoute) { }
  public serviceId: any;
  public num1:any;
  public num2:any;
  public rate:any;
  ngOnInit(): void {
    this.aroute.paramMap.subscribe((param)=>{
      this.serviceId = param.get('id');
    });
  }
  showBillH(){
    console.log('Household');
    this.router.navigate(['./Household'],{relativeTo: this.aroute});
    this.rate=2.5;
  }
  showBillI(){
    console.log('Industrial');
    this.router.navigate(['./Industrial'],{relativeTo: this.aroute});
    this.rate=5;
  }
  multiply()
  {
   this.num2=this.num1*this.rate;
  }
}
