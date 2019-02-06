import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsManualEntryComponent } from './students-manual-entry.component';

describe('StudentsManualEntryComponent', () => {
  let component: StudentsManualEntryComponent;
  let fixture: ComponentFixture<StudentsManualEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsManualEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsManualEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
