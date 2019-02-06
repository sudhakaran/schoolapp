import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDashboardComponent } from './all-dashboard.component';

describe('AllDashboardComponent', () => {
  let component: AllDashboardComponent;
  let fixture: ComponentFixture<AllDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
