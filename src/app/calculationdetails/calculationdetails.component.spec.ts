import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationdetailsComponent } from './calculationdetails.component';

describe('CalculationdetailsComponent', () => {
  let component: CalculationdetailsComponent;
  let fixture: ComponentFixture<CalculationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
