import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBottomComponent } from './profile-bottom.component';

describe('ProfileBottomComponent', () => {
  let component: ProfileBottomComponent;
  let fixture: ComponentFixture<ProfileBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
