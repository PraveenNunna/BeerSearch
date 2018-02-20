import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Brewery } from '../Classes/Brewery';

@Injectable()
export class BreweryService extends BaseService {

  private requestBaseUrl: string = this.getFullUrl();
  private http: Http;
  private breweries: Array<Brewery> = [];

  constructor(_http: Http) {
    super();
    this.http = _http;
  }

  getLatestBrewries(): Observable<Brewery[]> {
    let me = this,
      breweries: Brewery[] = [];

    return me.http.get(this.requestBaseUrl + 'breweries?since=1501545600&status=verified&hasImages=Y&' +
      'p=1&key=af92fb7b6a111f9e932034edbe4faa07').
      map((response: Response) => {
        let data = response.json();
        debugger;
        breweries = me.deserializeBreweries(data);
        console.log(breweries);
        return breweries;
      }) //For Success Response
      .catch(this.handleError);
  }

  private deserializeBreweries(responseData: any): Brewery[] {
    let breweries: Brewery[] = [],
      me = this,
      breweriesData = responseData.data || [],
      ln = breweriesData.length;

    if (breweriesData && breweriesData.length > 0) {
      for (let i = 0; i < ln; i++) {
        try {
          let brewery = me.deserializeBrewery(breweriesData[i]);
          breweries.push(brewery);
        } catch (e) {
          //ignore the records fail to deserialize.
        }
      }
    }

    return breweries;
  }

  private deserializeBrewery(responseData: any): Brewery {
    let brewery: Brewery,
      isOrganic = { "N": "No", "Y": "Yes" };

    try {
      brewery = new Brewery();

      brewery.id = responseData.id;
      brewery.name = responseData.name;
      brewery.description = responseData.description || 'Description currently not available';
      brewery.website = responseData.website ? responseData.website : "No Website";
      brewery.established = responseData.established || "Not available";
      brewery.isOrganic = responseData.isOrganic ? isOrganic[responseData.isOrganic] : 'No';
      brewery.imageUrl = (responseData.images && responseData.images["squareMedium"] )? responseData.images["squareMedium"] : "";

    } catch (e) {
      //ignore the object
      brewery = undefined;
    }

    return brewery;
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
