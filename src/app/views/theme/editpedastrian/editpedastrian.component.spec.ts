import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpedastrianComponent } from './editpedastrian.component';

describe('EditpedastrianComponent', () => {
  let component: EditpedastrianComponent;
  let fixture: ComponentFixture<EditpedastrianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpedastrianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpedastrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
