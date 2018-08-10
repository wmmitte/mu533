import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeAcquisitionComponent } from './mode-acquisition.component';

describe('ModeAcquisitionComponent', () => {
  let component: ModeAcquisitionComponent;
  let fixture: ComponentFixture<ModeAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
