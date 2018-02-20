import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {BeerService} from './Services/beer.service';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HeaderComponent } from './Views/header/header.component';
import { RandombeersComponent } from './Views/randombeers/randombeers.component';
import { BreweryComponent } from './Views/brewery/brewery.component';
import { AboutbeerComponent } from './Views/aboutbeer/aboutbeer.component';

@NgModule({
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
    NgxDatatableModule
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
