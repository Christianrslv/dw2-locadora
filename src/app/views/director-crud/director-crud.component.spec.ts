import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorCrudComponent } from './director-crud.component';

describe('DirectorCrudComponent', () => {
  let component: DirectorCrudComponent;
  let fixture: ComponentFixture<DirectorCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
