import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetComponent } from './objet.component';

describe('ObjetComponent', () => {
  let component: ObjetComponent;
  let fixture: ComponentFixture<ObjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
