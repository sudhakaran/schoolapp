import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManualEntryComponent } from './staff-manual-entry.component';

describe('StaffManualEntryComponent', () => {
  let component: StaffManualEntryComponent;
  let fixture: ComponentFixture<StaffManualEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManualEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManualEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
