import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDeleteComponent } from './title-delete.component';

describe('TitleDeleteComponent', () => {
  let component: TitleDeleteComponent;
  let fixture: ComponentFixture<TitleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
