import { TestBed } from '@angular/core/testing';

import { CusserviceService } from './cusservice.service';

describe('CusserviceService', () => {
  let service: CusserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
