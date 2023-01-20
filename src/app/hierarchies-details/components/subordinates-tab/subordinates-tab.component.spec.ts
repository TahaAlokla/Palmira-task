import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUBORDINATESTabComponent } from './subordinates-tab.component';

describe('SUBORDINATESTabComponent', () => {
  let component: SUBORDINATESTabComponent;
  let fixture: ComponentFixture<SUBORDINATESTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SUBORDINATESTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SUBORDINATESTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
