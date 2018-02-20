import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombeersComponent } from './randombeers.component';
import { BeerService } from '../../Services/beer.service';
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingModule } from 'ngx-loading';
import { ModalModule } from "ng2-modal";

describe('RandombeersComponent', () => {
  let component: RandombeersComponent;
  let fixture: ComponentFixture<RandombeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandombeersComponent],
      imports: [NgxDatatableModule, HttpModule, LoadingModule, ModalModule],
      providers: [BeerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandombeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
