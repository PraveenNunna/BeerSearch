import { TestBed, inject } from '@angular/core/testing';

import { BreweryService } from './brewery.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('BreweryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BreweryService]
    });
  });

  it('should be created', inject([BreweryService], (service: BreweryService) => {
    expect(service).toBeTruthy();
  }));
});
