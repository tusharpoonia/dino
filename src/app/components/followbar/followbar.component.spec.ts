import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowbarComponent } from './followbar.component';

describe('FollowbarComponent', () => {
  let component: FollowbarComponent;
  let fixture: ComponentFixture<FollowbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
