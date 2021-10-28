import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseReadComponent } from './classe-read.component';

describe('ClasseReadComponent', () => {
  let component: ClasseReadComponent;
  let fixture: ComponentFixture<ClasseReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
