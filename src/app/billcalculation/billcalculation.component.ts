import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-billcalculation',
  templateUrl: './billcalculation.component.html',
  styleUrls: ['./billcalculation.component.css']
})
export class BillcalculationComponent implements OnInit {
  public services = [
    { id: 1, name: 'Industrial' },
    { id: 2, name: 'Household' },
  ];
  constructor(public router: Router) {}

  ngOnInit(): void {}
  onClick(service: any) {
    this.router.navigate(['/billcalculation',service.id])
  }
  
}
