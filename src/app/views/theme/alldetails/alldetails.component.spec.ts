import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldetailsComponent } from './alldetails.component';

describe('AlldetailsComponent', () => {
  let component: AlldetailsComponent;
  let fixture: ComponentFixture<AlldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
