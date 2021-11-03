import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleUpdateComponent } from './title-update.component';

describe('TitleUpdateComponent', () => {
  let component: TitleUpdateComponent;
  let fixture: ComponentFixture<TitleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
