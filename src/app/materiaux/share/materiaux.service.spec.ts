import { TestBed, inject } from '@angular/core/testing';

import { MateriauxService } from './materiaux.service';

describe('MateriauxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriauxService]
    });
  });

  it('should be created', inject([MateriauxService], (service: MateriauxService) => {
    expect(service).toBeTruthy();
  }));
});
