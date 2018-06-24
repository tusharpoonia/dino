import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitypostComponent } from './activitypost.component';

describe('ActivitypostComponent', () => {
  let component: ActivitypostComponent;
  let fixture: ComponentFixture<ActivitypostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
