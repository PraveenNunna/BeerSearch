import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryComponent } from './brewery.component';
import { BreweryService } from '../../Services/brewery.service';
import { Brewery } from '../../Classes/Brewery';
import { LoadingModule } from 'ngx-loading';
import { HttpModule } from '@angular/http';

describe('BreweryComponent', () => {
  let component: BreweryComponent;
  let fixture: ComponentFixture<BreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryComponent ],
      providers: [
        BreweryService
      ],
      imports: [
        LoadingModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
