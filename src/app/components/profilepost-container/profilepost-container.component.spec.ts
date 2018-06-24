import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepostContainerComponent } from './profilepost-container.component';

describe('ProfilepostContainerComponent', () => {
  let component: ProfilepostContainerComponent;
  let fixture: ComponentFixture<ProfilepostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
