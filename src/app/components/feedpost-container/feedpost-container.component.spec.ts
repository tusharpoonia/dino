import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedpostContainerComponent } from './feedpost-container.component';

describe('FeedpostContainerComponent', () => {
  let component: FeedpostContainerComponent;
  let fixture: ComponentFixture<FeedpostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedpostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedpostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
