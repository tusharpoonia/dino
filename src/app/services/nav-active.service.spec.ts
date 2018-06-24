import { TestBed, inject } from '@angular/core/testing';

import { NavActiveService } from './nav-active.service';

describe('NavActiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavActiveService]
    });
  });

  it('should be created', inject([NavActiveService], (service: NavActiveService) => {
    expect(service).toBeTruthy();
  }));
});
