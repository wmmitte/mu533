import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatConservationComponent } from './etat-conservation.component';

describe('EtatConservationComponent', () => {
  let component: EtatConservationComponent;
  let fixture: ComponentFixture<EtatConservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatConservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatConservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
