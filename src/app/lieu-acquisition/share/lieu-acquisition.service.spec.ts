import { TestBed, inject } from '@angular/core/testing';

import { LieuAcquisitionService } from './lieu-acquisition.service';

describe('LieuAcquisitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LieuAcquisitionService]
    });
  });

  it('should be created', inject([LieuAcquisitionService], (service: LieuAcquisitionService) => {
    expect(service).toBeTruthy();
  }));
});
