import { TestBed, inject } from '@angular/core/testing';

import { MuseeService } from './musee.service';

describe('MuseeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuseeService]
    });
  });

  it('should be created', inject([MuseeService], (service: MuseeService) => {
    expect(service).toBeTruthy();
  }));
});
