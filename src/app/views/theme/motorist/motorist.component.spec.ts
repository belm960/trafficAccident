import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristComponent } from './motorist.component';

describe('MotoristComponent', () => {
  let component: MotoristComponent;
  let fixture: ComponentFixture<MotoristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
