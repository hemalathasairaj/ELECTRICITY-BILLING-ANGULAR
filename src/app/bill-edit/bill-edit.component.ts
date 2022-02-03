import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillserviceService } from '../billservice.service';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.css']
})
export class BillEditComponent implements OnInit {
  public billData:any={};
  submitted=false;
  public billnumber: any = this.aroute.snapshot.params['billnumber'];
   public selectedId: any;
 
   constructor( private service: BillserviceService,
     public router: Router,
     private aroute: ActivatedRoute) { }
     onSubmit() {
       this.submitted = true;
       alert('Customer Bill details are validated successfully!');
     }
   ngOnInit(): void {
     console.log('from ng oninit' + this.billnumber);
     this.service
       .getBill(this.billnumber)
       .subscribe((data) => (this.billData = data));
   }
   updateBill() {
     console.log(' Customer Bill Data ----->' + this.billData);
     this.service
       .updateBill(this.billData)
       .subscribe((data: {}) => this.router.navigate(['/bill_list']));
   }

}
