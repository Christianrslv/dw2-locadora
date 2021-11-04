import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationReadComponent } from './location-read.component';

describe('LocationReadComponent', () => {
  let component: LocationReadComponent;
  let fixture: ComponentFixture<LocationReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
