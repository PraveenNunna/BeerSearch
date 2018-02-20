import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingModule } from 'ngx-loading';
import { ModalModule } from "ng2-modal";

import { BeerService } from './Services/beer.service';
import { BreweryService } from './Services/brewery.service';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HeaderComponent } from './Views/header/header.component';
import { RandombeersComponent } from './Views/randombeers/randombeers.component';
import { BreweryComponent } from './Views/brewery/brewery.component';
import { AboutbeerComponent } from './Views/aboutbeer/aboutbeer.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        RandombeersComponent,
        BreweryComponent,
        AboutbeerComponent
      ],
      imports: [
        BrowserModule,
        routing,
        HttpModule,
        NgxDatatableModule,
        LoadingModule,
        ModalModule
      ],
      providers: [
        BeerService,
        BreweryService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should have app header tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
  }));

});
