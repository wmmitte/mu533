import { TestBed, inject } from '@angular/core/testing';

import { CollecteurService } from './collecteur.service';

describe('CollecteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollecteurService]
    });
  });

  it('should be created', inject([CollecteurService], (service: CollecteurService) => {
    expect(service).toBeTruthy();
  }));
});
