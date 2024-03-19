import { TestBed } from '@angular/core/testing';

import { DummyNgLibService } from './dummy-ng-lib.service';

describe('DummyNgLibService', () => {
  let service: DummyNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
