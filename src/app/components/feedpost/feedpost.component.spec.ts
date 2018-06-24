import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedpostComponent } from './feedpost.component';

describe('FeedpostComponent', () => {
  let component: FeedpostComponent;
  let fixture: ComponentFixture<FeedpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
