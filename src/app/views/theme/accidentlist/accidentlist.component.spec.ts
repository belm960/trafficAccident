import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentlistComponent } from './accidentlist.component';

describe('AccidentlistComponent', () => {
  let component: AccidentlistComponent;
  let fixture: ComponentFixture<AccidentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
