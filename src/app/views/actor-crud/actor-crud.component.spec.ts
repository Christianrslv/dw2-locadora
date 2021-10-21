import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorCrudComponent } from './actor-crud.component';

describe('ActorCrudComponent', () => {
  let component: ActorCrudComponent;
  let fixture: ComponentFixture<ActorCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
