import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {

  private herokuUrl: string = environment.herokuUrl;
  private baseUrl: string = environment.breweryDbUrl;
  private appKey: string = environment.appKey;

  constructor() { }


  public getFullUrl(): string {
    return this.herokuUrl + this.baseUrl;
  }

  public getAppKey(): string {
    return this.appKey;
  }
}
