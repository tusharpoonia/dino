import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileactivityContainerComponent } from './profileactivity-container.component';

describe('ProfileactivityContainerComponent', () => {
  let component: ProfileactivityContainerComponent;
  let fixture: ComponentFixture<ProfileactivityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileactivityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileactivityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
