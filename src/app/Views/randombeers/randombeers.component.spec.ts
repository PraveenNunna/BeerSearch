import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombeersComponent } from './randombeers.component';

describe('RandombeersComponent', () => {
  let component: RandombeersComponent;
  let fixture: ComponentFixture<RandombeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandombeersComponent ]
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
