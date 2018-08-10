import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuFabricationComponent } from './lieu-fabrication.component';

describe('LieuFabricationComponent', () => {
  let component: LieuFabricationComponent;
  let fixture: ComponentFixture<LieuFabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuFabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuFabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
