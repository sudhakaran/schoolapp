import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFeeRegulationComponent } from './students-fee-regulation.component';

describe('StudentsFeeRegulationComponent', () => {
  let component: StudentsFeeRegulationComponent;
  let fixture: ComponentFixture<StudentsFeeRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsFeeRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsFeeRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
