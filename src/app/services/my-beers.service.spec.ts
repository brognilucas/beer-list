import { TestBed } from '@angular/core/testing';

import { MyBeersService } from './my-beers.service';

describe('MyBeersService', () => {
  let service: MyBeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
