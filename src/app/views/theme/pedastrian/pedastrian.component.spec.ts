import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedastrianComponent } from './pedastrian.component';

describe('PedastrianComponent', () => {
  let component: PedastrianComponent;
  let fixture: ComponentFixture<PedastrianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedastrianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedastrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
