import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdmissionComponent } from './delete-admission.component';

describe('DeleteAdmissionComponent', () => {
  let component: DeleteAdmissionComponent;
  let fixture: ComponentFixture<DeleteAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
