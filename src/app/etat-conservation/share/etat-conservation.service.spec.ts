import { TestBed, inject } from '@angular/core/testing';

import { EtatConservationService } from './etat-conservation.service';

describe('EtatConservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtatConservationService]
    });
  });

  it('should be created', inject([EtatConservationService], (service: EtatConservationService) => {
    expect(service).toBeTruthy();
  }));
});
