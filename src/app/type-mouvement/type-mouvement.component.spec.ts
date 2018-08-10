import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMouvementComponent } from './type-mouvement.component';

describe('TypeMouvementComponent', () => {
  let component: TypeMouvementComponent;
  let fixture: ComponentFixture<TypeMouvementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMouvementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
