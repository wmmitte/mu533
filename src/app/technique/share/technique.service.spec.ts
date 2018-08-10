import { TestBed, inject } from '@angular/core/testing';

import { TechniqueService } from './technique.service';

describe('TechniqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechniqueService]
    });
  });

  it('should be created', inject([TechniqueService], (service: TechniqueService) => {
    expect(service).toBeTruthy();
  }));
});
