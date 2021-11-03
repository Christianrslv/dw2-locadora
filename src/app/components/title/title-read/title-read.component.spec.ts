import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleReadComponent } from './title-read.component';

describe('TitleReadComponent', () => {
  let component: TitleReadComponent;
  let fixture: ComponentFixture<TitleReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
