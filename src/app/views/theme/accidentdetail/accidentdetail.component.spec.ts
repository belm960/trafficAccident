import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentdetailComponent } from './accidentdetail.component';

describe('AccidentdetailComponent', () => {
  let component: AccidentdetailComponent;
  let fixture: ComponentFixture<AccidentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
