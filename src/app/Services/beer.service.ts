import { Injectable } from '@angular/core';
import { Beer } from '../Classes/Beer';
import { BaseService } from './base.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BeerService extends BaseService {
  private beers: Array<Beer> = [];

  private requestBaseUrl: string = this.getFullUrl();
  private apiKey : string = this.getAppKey();
  private http: Http;

  constructor(_http: Http) {
    super();
    this.http = _http;
  }

  //This method will return few default beers from API.
  public getDefaultBeers(): Observable<Beer[]> {
    let me = this,
      beers: Beer[] = [];

    return me.http.get(`${this.requestBaseUrl}beers?hasLabels=Y&withBreweries=Y&key=${me.apiKey}`).
      map((response: Response) => {
        let data = response.json();
        beers = me.deserializeBeers(data);
        console.log("Success");
        return beers;
      }) //For Success Response
      .catch(this.handleError);
  }

  private deserializeBeer(responseData: any): Beer {
    let beer: Beer, breweries:string[] =[];
    try {
      beer = new Beer();

      beer.id = responseData.id;
      beer.name = responseData.name;
      beer.styleName = responseData.style ? responseData.style.name : undefined;
      beer.alcoholPrecentage = responseData.abv || undefined;
      beer.description = responseData.description || undefined;
      beer.imageUrl = (responseData.labels && responseData.labels["medium"] )? responseData.labels["medium"] : "";

      if(responseData.breweries && responseData.breweries.length>0){
        responseData.breweries.forEach(element => {
          breweries.push(element.name);
        });
      }
      beer.breweries = breweries;

    } catch (e) {
      //ignore the object
      beer = undefined;
    }

    return beer;
  }


  private deserializeBeers(responseData: any): Beer[] {
    let me = this,
      beers: Beer[] = [],
      beersData = responseData.data || [],
      ln = beersData.length;

    if (beersData && beersData.length > 0) {
      for (let i = 0; i < ln; i++) {
        try {
          let beer = me.deserializeBeer(beersData[i]);
          if (beer !== undefined) {
            beers.push(beer);
          }
        } catch (e) {
          //ignore the records fail to deserialize.
        }
      }
    }

    return beers;
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
