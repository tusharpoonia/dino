import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileuserContainerComponent } from './profileuser-container.component';

describe('ProfileuserContainerComponent', () => {
  let component: ProfileuserContainerComponent;
  let fixture: ComponentFixture<ProfileuserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileuserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileuserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
