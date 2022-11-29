import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninvehicleComponent } from './personinvehicle.component';

describe('PersoninvehicleComponent', () => {
  let component: PersoninvehicleComponent;
  let fixture: ComponentFixture<PersoninvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninvehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoninvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
