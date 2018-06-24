import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiletopicContainerComponent } from './profiletopic-container.component';

describe('ProfiletopicContainerComponent', () => {
  let component: ProfiletopicContainerComponent;
  let fixture: ComponentFixture<ProfiletopicContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiletopicContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiletopicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
