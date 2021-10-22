import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorReadComponent } from './director-read.component';

describe('DiretorReadComponent', () => {
  let component: DirectorReadComponent;
  let fixture: ComponentFixture<DirectorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
