import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristdetailComponent } from './motoristdetail.component';

describe('MotoristdetailComponent', () => {
  let component: MotoristdetailComponent;
  let fixture: ComponentFixture<MotoristdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
