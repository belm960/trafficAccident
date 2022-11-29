import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersoninvehicleComponent } from './editpersoninvehicle.component';

describe('EditpersoninvehicleComponent', () => {
  let component: EditpersoninvehicleComponent;
  let fixture: ComponentFixture<EditpersoninvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpersoninvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersoninvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
