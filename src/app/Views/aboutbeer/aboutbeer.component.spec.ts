import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbeerComponent } from './aboutbeer.component';

describe('AboutbeerComponent', () => {
  let component: AboutbeerComponent;
  let fixture: ComponentFixture<AboutbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
