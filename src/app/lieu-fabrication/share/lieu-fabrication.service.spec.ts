import { TestBed, inject } from '@angular/core/testing';

import { LieuFabricationService } from './lieu-fabrication.service';

describe('LieuFabricationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LieuFabricationService]
    });
  });

  it('should be created', inject([LieuFabricationService], (service: LieuFabricationService) => {
    expect(service).toBeTruthy();
  }));
});
