import { TestBed, inject } from '@angular/core/testing';

import { BreweryService } from './brewery.service';

describe('BreweryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreweryService]
    });
  });

  it('should be created', inject([BreweryService], (service: BreweryService) => {
    expect(service).toBeTruthy();
  }));
});
