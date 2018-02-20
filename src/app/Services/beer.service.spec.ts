import { TestBed, inject } from '@angular/core/testing';

import { BeerService } from './beer.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BeerService]
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));

  it('should call API', inject([BeerService], (service: BeerService) => {
    var beers = [];

    var bs = service.getDefaultBeers()
      .subscribe(response => {
        beers = response;
        expect(beers).toBeGreaterThan(0);
      },
      error => console.log("Error :: " + error));


  }));

});
