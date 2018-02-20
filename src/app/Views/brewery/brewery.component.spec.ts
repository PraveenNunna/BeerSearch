import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryComponent } from './brewery.component';

describe('BreweryComponent', () => {
  let component: BreweryComponent;
  let fixture: ComponentFixture<BreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryComponent ]
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
