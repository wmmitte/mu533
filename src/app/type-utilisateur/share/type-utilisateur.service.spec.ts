import { TestBed, inject } from '@angular/core/testing';

import { TypeUtilisateurService } from './type-utilisateur.service';

describe('TypeUtilisateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeUtilisateurService]
    });
  });

  it('should be created', inject([TypeUtilisateurService], (service: TypeUtilisateurService) => {
    expect(service).toBeTruthy();
  }));
});
