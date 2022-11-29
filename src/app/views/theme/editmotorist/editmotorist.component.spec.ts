import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmotoristComponent } from './editmotorist.component';

describe('EditmotoristComponent', () => {
  let component: EditmotoristComponent;
  let fixture: ComponentFixture<EditmotoristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmotoristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmotoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
