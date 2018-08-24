import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSearchFormComponent } from './categorie-search-form.component';

describe('CategorieSearchFormComponent', () => {
  let component: CategorieSearchFormComponent;
  let fixture: ComponentFixture<CategorieSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
