import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTopicComponent } from './discover-topic.component';

describe('DiscoverTopicComponent', () => {
  let component: DiscoverTopicComponent;
  let fixture: ComponentFixture<DiscoverTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
