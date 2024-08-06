import { TestBed } from '@angular/core/testing';

import { BmService } from './bm.service';

describe('BmService', () => {
  let service: BmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
