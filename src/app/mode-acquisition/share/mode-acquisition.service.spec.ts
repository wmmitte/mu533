import { TestBed, inject } from '@angular/core/testing';

import { ModeAcquisitionService } from './mode-acquisition.service';

describe('ModeAcquisitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeAcquisitionService]
    });
  });

  it('should be created', inject([ModeAcquisitionService], (service: ModeAcquisitionService) => {
    expect(service).toBeTruthy();
  }));
});
