import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUtilisateurComponent } from './type-utilisateur.component';

describe('TypeUtilisateurComponent', () => {
  let component: TypeUtilisateurComponent;
  let fixture: ComponentFixture<TypeUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
