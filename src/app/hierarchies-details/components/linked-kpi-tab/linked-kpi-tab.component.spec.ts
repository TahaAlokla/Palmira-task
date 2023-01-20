import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LINKEDKPITabComponent } from './linked-kpi-tab.component';

describe('LINKEDKPITabComponent', () => {
  let component: LINKEDKPITabComponent;
  let fixture: ComponentFixture<LINKEDKPITabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LINKEDKPITabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LINKEDKPITabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
