import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdmissionComponent } from './all-admission.component';

describe('AllAdmissionComponent', () => {
  let component: AllAdmissionComponent;
  let fixture: ComponentFixture<AllAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
