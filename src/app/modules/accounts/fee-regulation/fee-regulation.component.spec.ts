import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeRegulationComponent } from './fee-regulation.component';

describe('FeeRegulationComponent', () => {
  let component: FeeRegulationComponent;
  let fixture: ComponentFixture<FeeRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
