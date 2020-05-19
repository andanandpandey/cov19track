import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldwidedashboardComponent } from './worldwidedashboard.component';

describe('WorldwidedashboardComponent', () => {
  let component: WorldwidedashboardComponent;
  let fixture: ComponentFixture<WorldwidedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldwidedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldwidedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
