import { TestBed, inject } from '@angular/core/testing';

import { FabricantService } from './fabricant.service';

describe('FabricantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FabricantService]
    });
  });

  it('should be created', inject([FabricantService], (service: FabricantService) => {
    expect(service).toBeTruthy();
  }));
});
