import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillcalculationComponent } from './billcalculation.component';

describe('BillcalculationComponent', () => {
  let component: BillcalculationComponent;
  let fixture: ComponentFixture<BillcalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillcalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
