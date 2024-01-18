import { TestBed } from '@angular/core/testing';

import { QandAServiceService } from './qand-aservice.service';

describe('QandAServiceService', () => {
  let service: QandAServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QandAServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
