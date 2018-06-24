import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscovertopicContainerComponent } from './discovertopic-container.component';

describe('DiscovertopicContainerComponent', () => {
  let component: DiscovertopicContainerComponent;
  let fixture: ComponentFixture<DiscovertopicContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscovertopicContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscovertopicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
