import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecteurListeComponent } from './collecteur-liste.component';

describe('CollecteurListeComponent', () => {
  let component: CollecteurListeComponent;
  let fixture: ComponentFixture<CollecteurListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollecteurListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollecteurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
