import { TestBed, inject } from '@angular/core/testing';

import { TypeMouvementService } from './type-mouvement.service';

describe('TypeMouvementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeMouvementService]
    });
  });

  it('should be created', inject([TypeMouvementService], (service: TypeMouvementService) => {
    expect(service).toBeTruthy();
  }));
});
