import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuAcquisitionComponent } from './lieu-acquisition.component';

describe('LieuAcquisitionComponent', () => {
  let component: LieuAcquisitionComponent;
  let fixture: ComponentFixture<LieuAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
